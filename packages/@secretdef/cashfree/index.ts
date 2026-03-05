import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CASHFREE_APP_ID: {
    description: 'Cashfree app ID',
    dashboard: 'https://merchant.cashfree.com',
  },
  CASHFREE_SECRET_KEY: {
    description: 'Cashfree secret key',
    dashboard: 'https://merchant.cashfree.com',
  },
});
