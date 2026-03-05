import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GODADDY_API_KEY: {
    description: 'GoDaddy API key',
    dashboard: 'https://developer.godaddy.com/getstarted',
  },
  GODADDY_API_SECRET: {
    description: 'GoDaddy API secret',
    dashboard: 'https://developer.godaddy.com/getstarted',
  },
});
