import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HONEYBADGER_API_KEY: {
    description: 'Honeybadger API key',
    dashboard: 'https://app.honeybadger.io/projects',
  },
});
