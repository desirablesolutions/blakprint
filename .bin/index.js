#!/usr/bin/env node

const blakprint = require('./src/index.ts')
const path = require('path');
const yargs = require('yargs');
const makeDir = require('make-dir');

const presets = {
  basic: {
    models: {
      configs: {
        "index": "index.ts"
      },
      data: {
        db: {},
        pages: {},
        routes: {}
      }
    },
    views: {
      components: {},
      includes: {},
      layouts: {},
      styles: {},
      libs: {}
    },
    controllers: {
      services: {},
      hooks: {},
      tests: {}
    }
  },
  react: {
    src: {
      components: {},
      pages: {},
    },
    public: {},
  },
  node: {
    src: {
      'index.ts': '',
    },
    test: {},
  },
};

async function createDirectories(dirPath, dirStructure) {
  await makeDir(dirPath);
  for (const [name, subStructure] of Object.entries(dirStructure)) {
    const subPath = path.join(dirPath, name);
    if (typeof subStructure === 'object') {
      await createDirectories(subPath, subStructure);
    } else {
      await makeDir(subPath);
      console.log(subPath);
    }
  }
}

async function generateDirectories(options) {
  const preset = presets[options?.preset ?? "basic"];
  const dirPath = path.resolve(options?.path || '/');
  await createDirectories(dirPath, preset);
  console.log(`Created ${options.preset} directory structure at ${dirPath}`);
}

const options = yargs
  .usage('Usage: blakprint <command> [options]')
  .command(
    'generate <preset>',
    'Generate a directory structure from a preset',
    (yargs) => {
      return yargs
        .positional('preset', {
          describe: 'Preset directory structure to generate',
          choices: Object.keys(presets),
          demandOption: true,
        })
        .option('path', {
          describe: 'Starting path for the directory structure',
          type: 'string',
          default: '.',
        });
    },
    async (argv) => {
      await generateDirectories(argv);
    }
  )
  .command(
    'create <preset>',
    'Generate a directory structure from a preset',
    (yargs) => {
      return yargs
        .positional('test', {
          describe: 'Preset directory structure to generate',
          choices: Object.keys(presets),
          demandOption: true,
        })
        .option('path', {
          describe: 'Starting path for the directory structure',
          type: 'string',
          default: '.',
        });
    },
    async (argv) => {
      await makeDir("/test/")
    }
  )
  .help('h')
  .alias('h', 'help')
  .argv
