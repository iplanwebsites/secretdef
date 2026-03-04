import express from 'express';
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

  const app = express();

  app.get('/', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.get('/secret', (_req, res) => {
    try {
      // 3. Access a secret at runtime with useSecret().
      //    If the secret is missing, it throws a SecretNotAvailableError
      //    with the env var name, description, dashboard URL, and fix instructions.
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
