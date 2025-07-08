#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Default command if none provided
const defaultCommand = ['pnpm', 'run', 'start'];

// Get command from arguments or use default
const command = process.argv.length > 2 ? process.argv.slice(2) : defaultCommand;

console.log(`Starting: ${command.join(' ')}`);

// Spawn the process
const child = spawn(command[0], command.slice(1), {
  stdio: 'inherit',
  cwd: '/app'
});

// Handle process exit
child.on('exit', (code, signal) => {
  if (signal) {
    console.log(`Process killed with signal ${signal}`);
    process.exit(1);
  } else {
    console.log(`Process exited with code ${code}`);
    process.exit(code);
  }
});

// Handle errors
child.on('error', (err) => {
  console.error(`Failed to start process: ${err.message}`);
  process.exit(1);
});

// Handle termination signals
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  child.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  child.kill('SIGINT');
});
