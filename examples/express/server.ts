import express from 'express';
import { validateSecrets, useSecret } from 'secretdef';
import { secrets } from './secrets.js';

export function createApp() {
  validateSecrets(secrets);

  const app = express();

  app.get('/', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.get('/secret', (_req, res) => {
    try {
      const value = useSecret('API_KEY', secrets);
      res.json({ API_KEY: value });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  return app;
}

// Start server when run directly
const isDirectRun = process.argv[1]?.includes('server');
if (isDirectRun) {
  const app = createApp();
  app.listen(3100, () => {
    console.log('Express example running on http://localhost:3100');
  });
}
