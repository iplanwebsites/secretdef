import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  QUICKBOOKS_CLIENT_ID: {
    description: 'QuickBooks OAuth client ID',
    dashboard: 'https://developer.intuit.com/app/developer/dashboard',
  },
  QUICKBOOKS_CLIENT_SECRET: {
    description: 'QuickBooks OAuth client secret',
    dashboard: 'https://developer.intuit.com/app/developer/dashboard',
  },
});
