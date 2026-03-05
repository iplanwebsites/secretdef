import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SALESFLARE_API_KEY: {
    description: 'Salesflare API key',
    dashboard: 'https://app.salesflare.com',
  },
});
