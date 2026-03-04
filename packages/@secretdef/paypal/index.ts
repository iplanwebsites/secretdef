import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAYPAL_CLIENT_ID: {
    description: 'PayPal client ID — https://developer.paypal.com/dashboard/applications',
    environments: {
      development: { envVar: 'PAYPAL_SANDBOX_CLIENT_ID' },
    },
  },
  PAYPAL_CLIENT_SECRET: {
    description: 'PayPal client secret — https://developer.paypal.com/dashboard/applications',
    environments: {
      development: { envVar: 'PAYPAL_SANDBOX_CLIENT_SECRET' },
    },
  },
});
