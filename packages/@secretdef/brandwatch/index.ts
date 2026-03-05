import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BRANDWATCH_API_KEY: {
    description: 'Brandwatch API key',
    dashboard: 'https://www.brandwatch.com',
  },
});
