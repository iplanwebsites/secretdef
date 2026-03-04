import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { validateSecrets, useSecret } from 'secretdef';
import { secrets } from './secrets.js';

export function createApp() {
  validateSecrets(secrets);

  const app = new Hono();

  app.get('/', (c) => {
    return c.json({ status: 'ok' });
  });

  app.get('/secret', (c) => {
    try {
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
