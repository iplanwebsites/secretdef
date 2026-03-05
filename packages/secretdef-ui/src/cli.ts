import { resolve } from 'node:path';
import { startServer, setProjectRoot } from './server.js';
import { findAvailablePort } from './utils/port.js';
import { openBrowser } from './utils/open-browser.js';

function parseCwd(args: string[]): string | undefined {
  const idx = args.indexOf('--cwd');
  if (idx !== -1 && args[idx + 1]) {
    return resolve(args[idx + 1]);
  }
  return undefined;
}

async function main() {
  const cwd = parseCwd(process.argv);
  if (cwd) {
    setProjectRoot(cwd);
  }

  console.log('secretdef ui (experimental)\n');

  const port = await findAvailablePort(4100);
  const url = `http://localhost:${port}`;

  const server = startServer(port);

  console.log(`Dashboard → ${url}`);
  if (cwd) {
    console.log(`Project root → ${cwd}`);
  }
  console.log('Press Ctrl+C to stop\n');

  openBrowser(url);

  const shutdown = () => {
    console.log('\nShutting down...');
    server.close(() => process.exit(0));
    // Force exit after 2s
    setTimeout(() => process.exit(0), 2000);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

main().catch((err) => {
  console.error('Failed to start:', err);
  process.exit(1);
});
