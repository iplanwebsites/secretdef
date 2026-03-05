import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MOLLIE_API_KEY: {
    description: 'Mollie API key',
    dashboard: 'https://my.mollie.com/dashboard/developers/api-keys',
  },
});
