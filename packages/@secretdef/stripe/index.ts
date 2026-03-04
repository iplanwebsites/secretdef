import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STRIPE_SECRET_KEY: {
    description: 'Stripe API secret key — https://dashboard.stripe.com/apikeys',
    environments: {
      development: { envVar: 'STRIPE_TEST_SECRET_KEY' },
    },
  },
  STRIPE_PUBLISHABLE_KEY: {
    description: 'Publishable key — https://dashboard.stripe.com/apikeys',
    environments: {
      development: { envVar: 'STRIPE_TEST_PUBLISHABLE_KEY' },
    },
  },
  STRIPE_WEBHOOK_SECRET: {
    description: 'Webhook signing secret — https://dashboard.stripe.com/webhooks',
    environments: {
      development: { required: false, default: 'whsec_test' },
    },
  },
});
