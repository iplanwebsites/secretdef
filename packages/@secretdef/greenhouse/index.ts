import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GREENHOUSE_API_KEY: {
    description: 'Greenhouse Harvest API key',
    dashboard: 'https://app.greenhouse.io',
  },
});
