import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MX_CLIENT_ID: {
    description: 'MX client ID',
    dashboard: 'https://dashboard.mx.com/client',
  },
  MX_API_KEY: {
    description: 'MX API key',
    dashboard: 'https://dashboard.mx.com/client',
  },
});
