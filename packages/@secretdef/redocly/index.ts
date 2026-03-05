import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REDOCLY_API_KEY: {
    description: 'Redocly API key',
    dashboard: 'https://app.redocly.com',
  },
});
