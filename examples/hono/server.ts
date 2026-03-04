import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { validateSecrets, useSecret } from 'secretdef';

// 1. Import your secret definitions.
//    defineSecrets() in secrets.ts declares what env vars the app needs
//    and auto-registers them to the global registry.
import { secrets } from './secrets.js';

export function createApp() {
  // 2. Validate all secrets at startup — before any route runs.
  //    In production: missing required secrets print an error table and exit.
  //    In development: missing secrets warn but the server still starts.
  validateSecrets(secrets);

  const app = new Hono();

  app.get('/', (c) => {
    return c.json({ status: 'ok' });
  });

  app.get('/secret', (c) => {
    try {
      // 3. Access a secret at runtime with useSecret().
      //    If the secret is missing, it throws a SecretNotAvailableError
      //    with the env var name, description, dashboard URL, and fix instructions.
      const value = useSecret('API_KEY', secrets);
      return c.json({ API_KEY: value });
    } catch (err: any) {
      return c.json({ error: err.message }, 500);
    }
  });

  return app;
}

// Start server when run directly
const isDirectRun = process.argv[1]?.includes('server');
if (isDirectRun) {
  const app = createApp();
  serve({ fetch: app.fetch, port: 3101 }, () => {
    console.log('Hono example running on http://localhost:3101');
  });
}
