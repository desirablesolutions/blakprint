import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import axios from 'axios'
import http from 'node:http'
import * as url from 'node:url';

export class VirtualizedEvaluator {
  private IS_RUNNER: string;
  private FLY_API_TOKEN: string;
  private FLY_APP_NAME: string;
  private FLY_IMAGE_REF: string;
  private IS_LOCAL_DEV: string;
  private port: number = 5500;
  private timeUntilStop: number = 5 * 60 * 1000;
  private exitTimeout: NodeJS.Timeout;
  private processGroup: string;
  private machinesService: any;
  private workerBaseUrl: string;
  private workerService: any;

  constructor() {
    this.IS_RUNNER = process.env.IS_RUNNER;
    this.FLY_API_TOKEN = process.env.FLY_API_TOKEN;
    this.FLY_APP_NAME = process.env.FLY_APP_NAME;
    this.FLY_IMAGE_REF = process.env.FLY_IMAGE_REF;
    this.IS_LOCAL_DEV = process.env.IS_LOCAL_DEV;

    if (this.FLY_IMAGE_REF.includes(':deployment-')) {
      const deploymentId = this.FLY_IMAGE_REF.split(':deployment-').pop().toLocaleLowerCase()
      this.processGroup = `worker-${deploymentId}`
    } else {
      this.processGroup = `worker-${new Buffer(this.FLY_IMAGE_REF).toString('base64').toLocaleLowerCase()}`
    }

    this.machinesService = axios.create({
      baseURL: `https://api.machines.dev/v1/apps/${this.FLY_APP_NAME}`,
      headers: { 'Authorization': `Bearer ${this.FLY_API_TOKEN}` }
    })

    if (this.IS_LOCAL_DEV) {
      this.workerBaseUrl = `http://localhost:${this.port}`
    } else {
      this.workerBaseUrl = `http://${this.processGroup}.process.${this.FLY_APP_NAME}.internal:${this.port}`
    }
    this.workerService = axios.create({ baseURL: this.workerBaseUrl })
  }

  public async runOnAnotherMachine<T, U>(originalFunc: T, config: U): Promise<any> {
    if (this.IS_RUNNER) {
      return originalFunc
    }

    const { 
      meta, 
      guest = {
        cpu_kind: "shared",
        cpus: 1,
        memory_mb: 256
      } 
    } = config

    const filename = url.fileURLToPath(config.meta.url);

    return async function (...args) {
      if (!(await this.checkIfThereAreWorkers())) {
        await this.spawnAnotherMachine(guest)
      }

      return await this.execOnMachine(filename, args)
    }
  }

  private async spawnAnotherMachine(guest): Promise<any> {
    const filename = url.fileURLToPath(import.meta.url);

    const {data: machine} = await this.machinesService.post('/machines', {
      config: {
        auto_destroy: true,
        image: this.FLY_IMAGE_REF,
        guest,
        env: {
          IS_RUNNER: "1"
        },
        processes: [
          {
            name: "runner",
            entrypoint: ['node'],
            cmd: [filename]
          }
        ],
        metadata: {
          fly_process_group: this.processGroup
        }
      }
    })

    const waitRes = await this.machinesService.get(`/machines/${machine.id}/wait?timeout=60&state=started`)

    return machine
  }

  private async checkIfThereAreWorkers(): Promise<boolean> {
    try {
      const res = await this.workerService.get('/')
      return res.status === 200 && res.data.ok
    } catch (err) {
      return false
    }
  }

  private async execOnMachine(filename, args): Promise<any> {
    const jsonArgs = JSON.stringify(args)
    
    const execRes = await this.workerService.post('/', {
      filename,
      args
    })

    return execRes.data.___result
  }

  private scheduleStop(): void {
    clearInterval(this.exitTimeout)

    this.exitTimeout = setTimeout(() => {
      process.exit(0)
    }, this.timeUntilStop)

    console.info(`Server will stop in ${this.timeUntilStop}ms`)
  }
}
