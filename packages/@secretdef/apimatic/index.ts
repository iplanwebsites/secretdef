import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APIMATIC_API_KEY: {
    description: 'APIMatic API key',
    dashboard: 'https://www.apimatic.io',
  },
});
