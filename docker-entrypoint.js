#!/usr/bin/env node

// Simple entrypoint script for Next.js app
// This script starts the Next.js production server

const { spawn } = require('child_process');
const path = require('path');

console.log('Starting Next.js application...');

// Change to app directory
process.chdir('/app');

// Start the Next.js server
const child = spawn('pnpm', ['run', 'start'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'production',
    PORT: '3000',
    HOSTNAME: '0.0.0.0'
  }
});

// Handle process termination gracefully
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  child.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  child.kill('SIGINT');
});

child.on('exit', (code, signal) => {
  console.log(`Child process exited with code ${code} and signal ${signal}`);
  process.exit(code);
});

child.on('error', (error) => {
  console.error('Error starting child process:', error);
  process.exit(1);
});