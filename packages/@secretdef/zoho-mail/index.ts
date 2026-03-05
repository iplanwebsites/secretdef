import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZOHO_MAIL_CLIENT_ID: {
    description: 'Zoho Mail OAuth client ID',
    dashboard: 'https://api-console.zoho.com',
  },
  ZOHO_MAIL_CLIENT_SECRET: {
    description: 'Zoho Mail OAuth client secret',
    dashboard: 'https://api-console.zoho.com',
  },
  ZOHO_MAIL_REFRESH_TOKEN: {
    description: 'Zoho Mail OAuth refresh token',
    dashboard: 'https://api-console.zoho.com',
  },
});
