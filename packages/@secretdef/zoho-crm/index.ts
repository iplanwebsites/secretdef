import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZOHO_CLIENT_ID: {
    description: 'Zoho OAuth client ID',
    dashboard: 'https://api-console.zoho.com',
  },
  ZOHO_CLIENT_SECRET: {
    description: 'Zoho OAuth client secret',
    dashboard: 'https://api-console.zoho.com',
  },
  ZOHO_REFRESH_TOKEN: {
    description: 'Zoho OAuth refresh token',
    dashboard: 'https://api-console.zoho.com',
  },
});
