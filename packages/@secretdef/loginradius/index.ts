import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOGINRADIUS_API_KEY: {
    description: 'LoginRadius API key',
    dashboard: 'https://dashboard.loginradius.com',
  },
  LOGINRADIUS_API_SECRET: {
    description: 'LoginRadius API secret',
    dashboard: 'https://dashboard.loginradius.com',
  },
  LOGINRADIUS_APP_NAME: {
    description: 'LoginRadius app name',
    dashboard: 'https://dashboard.loginradius.com',
    required: false,
  },
});
