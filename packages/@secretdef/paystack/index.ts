import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAYSTACK_SECRET_KEY: {
    description: 'Paystack secret key',
    dashboard: 'https://dashboard.paystack.com/#/settings/developers',
  },
  PAYSTACK_PUBLIC_KEY: {
    description: 'Paystack public key',
    dashboard: 'https://dashboard.paystack.com/#/settings/developers',
    required: false,
  },
});
