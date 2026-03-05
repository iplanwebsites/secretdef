import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SIMPLERO_API_KEY: {
    description: 'Simplero API key',
    dashboard: 'https://simplero.com',
  },
});
