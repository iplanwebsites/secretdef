import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHAINSTACK_API_KEY: {
    description: 'Chainstack API key',
    dashboard: 'https://console.chainstack.com',
  },
});
