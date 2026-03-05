import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IPSTACK_API_KEY: {
    description: 'ipstack API key',
    dashboard: 'https://ipstack.com/dashboard',
  },
});
