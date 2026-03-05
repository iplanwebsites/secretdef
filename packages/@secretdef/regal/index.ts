import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REGAL_API_KEY: {
    description: 'Regal.io API key',
    dashboard: 'https://app.regal.io',
  },
});
