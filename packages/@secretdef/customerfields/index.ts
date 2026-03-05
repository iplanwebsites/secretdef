import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CUSTOMERFIELDS_API_KEY: {
    description: 'Customer Fields API key',
    dashboard: 'https://customerfields.com',
  },
});
