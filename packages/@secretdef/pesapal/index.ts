import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PESAPAL_CONSUMER_KEY: {
    description: 'Pesapal consumer key',
    dashboard: 'https://www.pesapal.com',
  },
  PESAPAL_CONSUMER_SECRET: {
    description: 'Pesapal consumer secret',
    dashboard: 'https://www.pesapal.com',
  },
});
