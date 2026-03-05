import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  XERO_CLIENT_ID: {
    description: 'Xero OAuth client ID',
    dashboard: 'https://developer.xero.com/app/manage',
  },
  XERO_CLIENT_SECRET: {
    description: 'Xero OAuth client secret',
    dashboard: 'https://developer.xero.com/app/manage',
  },
});
