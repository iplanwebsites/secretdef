import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHECKOUT_SECRET_KEY: {
    description: 'Checkout.com secret key',
    dashboard: 'https://dashboard.checkout.com/developers/keys',
  },
  CHECKOUT_PUBLIC_KEY: {
    description: 'Checkout.com public key',
    dashboard: 'https://dashboard.checkout.com/developers/keys',
    required: false,
  },
});
