import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VENAFI_TPP_URL: {
    description: 'Venafi TPP URL',
    dashboard: 'https://www.venafi.com',
    validate: 'url',
  },
  VENAFI_TPP_TOKEN: {
    description: 'Venafi TPP access token',
    dashboard: 'https://www.venafi.com',
  },
});
