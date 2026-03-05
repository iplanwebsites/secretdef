import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAYHERE_MERCHANT_ID: {
    description: 'PayHere merchant ID',
    dashboard: 'https://sandbox.payhere.lk',
  },
  PAYHERE_MERCHANT_SECRET: {
    description: 'PayHere merchant secret',
    dashboard: 'https://sandbox.payhere.lk',
  },
});
