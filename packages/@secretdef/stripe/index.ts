import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STRIPE_SECRET_KEY: {
    envVar: 'STRIPE_SECRET_KEY',
    description: 'Stripe API secret key — https://dashboard.stripe.com/apikeys',
    envOverrides: {
      development: { envVar: 'STRIPE_TEST_SECRET_KEY' },
    },
  },
  STRIPE_PUBLISHABLE_KEY: {
    envVar: 'STRIPE_PUBLISHABLE_KEY',
    description: 'Publishable key — https://dashboard.stripe.com/apikeys',
    envOverrides: {
      development: { envVar: 'STRIPE_TEST_PUBLISHABLE_KEY' },
    },
  },
  STRIPE_WEBHOOK_SECRET: {
    envVar: 'STRIPE_WEBHOOK_SECRET',
    description: 'Webhook signing secret — https://dashboard.stripe.com/webhooks',
    envOverrides: {
      development: { required: false, default: 'whsec_test' },
    },
  },
});
