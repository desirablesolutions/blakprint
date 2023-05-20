#!/usr/bin/env node

const path = require('path');
const yargs = require('yargs');
const makeDir = require('make-dir');
const chalk = require('chalk');


const fs = require('fs');
const Table = require('cli-table3');


const presets = {
  mvc: {
    models: {},
    views: {},
    controllers: {}
  },
  docs: {
    
  }
}

const DEFAULT_FILE_CONTENT = 'Generated by blakprint';

async function createFile(filePath, content) {
  await fs.promises.writeFile(filePath, content);
}

async function createDirectories(dirPath, dirStructure) {
  await makeDir(dirPath);

  for (const [name, subStructure] of Object.entries(dirStructure)) {
    const subPath = path.join(dirPath, name);
    if (typeof subStructure === 'object' && Object.keys(subStructure).length) {
      await createDirectories(subPath, subStructure);
    } else if (typeof subStructure === 'string') {
      await createFile(subPath, subStructure || DEFAULT_FILE_CONTENT);
      console.log(chalk.green(`File created: ${subPath}`));
    } else {
      await makeDir(subPath);
      console.log(chalk.green(`Directory created: ${subPath}`));
    }
  }
}

async function generateDirectories(options) {
  const preset = options.preset;
  const dirPath = path.resolve(options.path);
  await createDirectories(dirPath, preset);
  console.log(chalk.green(`Created ${options.preset} directory structure at ${dirPath}`));
}

function createCLIOptions(yargs, positionalArg, optionArg) {
  return yargs
    .positional(positionalArg.name, positionalArg.config)
    .option(optionArg.name, optionArg.config);
}

function createCLICommand(yargs, commandName, commandDesc, positionalArg, optionArg, handler) {
  yargs.command(
    commandName,
    commandDesc,
    yargs => createCLIOptions(yargs, positionalArg, optionArg),
    handler
  );
}

const options = yargs
  .usage('Usage: blakprint <command> [options]');

createCLICommand(
  options,
  'generate <preset>',
  'Generate a directory structure from a preset',
  { name: 'preset', config: { describe: 'Preset directory structure to generate', choices: Object.keys(presets), demandOption: true } },
  { name: 'path', config: { describe: 'Starting path for the directory structure', type: 'string', default: '.' } },
  async (argv) => { await generateDirectories({ preset: presets[argv.preset], path: argv.path }); }
);

createCLICommand(
  options,
  'create <test>',
  'Create a directory for tests',
  { name: 'test', config: { describe: 'Create test directory', choices: Object.keys(presets), demandOption: true } },
  { name: 'path', config: { describe: 'Starting path for the directory structure', type: 'string', default: '.' } },
  async (argv) => { await makeDir(path.join(argv.path, '/test/')); }
);

createCLICommand(
  options,
  'bootstrap <framework>',
  'Create a directory for tests',
  { name: 'test', config: { describe: 'Create test directory', choices: Object.keys(presets), demandOption: true } },
  { name: 'path', config: { describe: 'Starting path for the directory structure', type: 'string', default: '.' } },
  async (argv) => { await makeDir(path.join(argv.path, '/test/')); }
);

options
  .help('h')
  .alias('h', 'help')
  .argv;
