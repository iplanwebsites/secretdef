import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CODA_API_KEY: {
    description: 'Coda API key',
    dashboard: 'https://coda.io/account',
  },
});
