import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import http, { IncomingMessage, ServerResponse } from 'node:http';
import * as url from 'url';

// Define generic types for the configuration and result types
type GuestConfig = {
  cpu_kind: string;
  cpus: number;
  memory_mb: number;
};

type ProcessConfig = {
  name: string;
  entrypoint: string[];
  cmd: string[];
};

type MachineConfig = {
  auto_destroy: boolean;
  image: string;
  guest: GuestConfig;
  env: Record<string, string>;
  processes: ProcessConfig[];
  metadata: Record<string, string>;
};

type WorkerResponse = {
  ok: boolean;
};

type ExecOnMachineResponse<T> = {
  ___result: T;
};

class WorkerManager {
  private IS_RUNNER: boolean;
  private FLY_API_TOKEN: string;
  private FLY_APP_NAME: string;
  private FLY_IMAGE_REF: string;
  private IS_LOCAL_DEV: boolean;
  private port: number;
  private timeUntilStop: number;
  private exitTimeout: NodeJS.Timeout;
  private processGroup: string;
  private machinesService: AxiosInstance;
  private workerBaseUrl: string;
  private workerService: AxiosInstance;
  private server: http.Server | null;

  constructor() {
    this.IS_RUNNER = process.env.IS_RUNNER === 'true';
    this.FLY_API_TOKEN = process.env.FLY_API_TOKEN || '';
    this.FLY_APP_NAME = process.env.FLY_APP_NAME || '';
    this.FLY_IMAGE_REF = process.env.FLY_IMAGE_REF || '';
    this.IS_LOCAL_DEV = process.env.IS_LOCAL_DEV === 'true';
    this.port = 5500;
    this.timeUntilStop = 5 * 60 * 1000;
    this.exitTimeout = setTimeout(() => {}, 0); // Placeholder timeout
    this.processGroup = this.IS_RUNNER
      ? `worker-${new Buffer(this.FLY_IMAGE_REF).toString('base64').toLocaleLowerCase()}`
      : '';
    this.machinesService = axios.create({
      baseURL: `https://api.machines.dev/v1/apps/${this.FLY_APP_NAME}`,
      headers: { 'Authorization': `Bearer ${this.FLY_API_TOKEN}` },
    });
    this.workerBaseUrl = this.IS_LOCAL_DEV
      ? `http://localhost:${this.port}`
      : `http://${this.processGroup}.process.${this.FLY_APP_NAME}.internal:${this.port}`;
    this.workerService = axios.create({ baseURL: this.workerBaseUrl });
    this.server = null;

    if (this.IS_RUNNER) {
      this.initializeRunner();
    }
  }

  private initializeRunner() {
    const requestHandler = (request: IncomingMessage, response: ServerResponse) => {
      this.scheduleStop();
      console.info(`Received ${request.method} request`);

      let body = '';

      if (request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ ok: true }));
        response.end();
        return;
      }

      request.on('readable', () => {
        let chunk;
        if ((chunk = request.read())) {
          body += chunk;
        }
      });

      request.on('end', async () => {
        const { filename, args } = JSON.parse(body);

        const mod = await import(filename);
        const result = await mod.default(...args);
        const jsonResponse = JSON.stringify({ ___result: result });
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(jsonResponse);
        response.end();
      });
    };

    this.server = http.createServer(requestHandler);

    this.server.listen(this.port, (err) => {
      if (err) {
        return console.log('something bad happened', err);
      }

      console.log(`Server is listening on ${this.port}`);
      this.scheduleStop();
    });
  }

  private scheduleStop() {
    clearInterval(this.exitTimeout);

    this.exitTimeout = setTimeout(() => {
      process.exit(0);
    }, this.timeUntilStop);

    console.info(`Server will stop in ${this.timeUntilStop}ms`);
  }

  /**
   * Method to run a function on another machine
   * @param originalFunc - The original function to be executed on another machine
   * @param config - Configuration for the execution
   * @returns A function that, when called, will execute the original function on another machine
   */
  public async runOnAnotherMachine<T>(originalFunc: (...args: any[]) => Promise<T>, config: { meta: { url: string }; guest?: GuestConfig }): Promise<(...args: any[]) => Promise<T>> {
    if (this.IS_RUNNER) {
      return originalFunc;
    }

    const { meta, guest = { cpu_kind: 'shared', cpus: 1, memory_mb: 256 } } = config;
    const filename = url.fileURLToPath(meta.url);

    if (!(await this.checkIfThereAreWorkers())) {
      await this.spawnAnotherMachine(guest);
    }

    return async (...args: any[]) => await this.execOnMachine<T>(filename, args);
  }

  private async spawnAnotherMachine(guest: GuestConfig): Promise<void> {
    const filename = url.fileURLToPath(import.meta.url);

    const machineConfig: MachineConfig = {
      auto_destroy: true,
      image: this.FLY_IMAGE_REF,
      guest,
      env: { IS_RUNNER: '1' },
      processes: [
        {
          name: 'runner',
          entrypoint: ['node'],
          cmd: [filename],
        },
      ],
      metadata: { fly_process_group: this.processGroup },
    };

    const { data: machine } = await this.machinesService.post('/machines', {
      config: machineConfig,
    });

    await this.machinesService.get(`/machines/${machine.id}/wait?timeout=60&state=started`);
  }

  private async checkIfThereAreWorkers(): Promise<boolean> {
    try {
      const res: AxiosResponse<WorkerResponse> = await this.workerService.get('/');
      return res.status === 200 && res.data.ok;
    } catch (err) {
      return false;
    }
  }

  private async execOnMachine<T>(filename: string, args: any[]): Promise<T> {
    const execRes: AxiosResponse<ExecOnMachineResponse<T>> = await this.workerService.post('/', {
      filename,
      args,
    });

    return execRes.data.___result;
  }
}

export default WorkerManager;
