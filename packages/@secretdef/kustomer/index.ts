import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KUSTOMER_API_KEY: {
    description: 'Kustomer API key',
    dashboard: 'https://kustomer.com',
  },
});
