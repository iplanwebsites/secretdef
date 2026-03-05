import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REVENUECAT_API_KEY: {
    description: 'RevenueCat API key',
    dashboard: 'https://app.revenuecat.com',
  },
  REVENUECAT_SECRET_KEY: {
    description: 'RevenueCat secret API key',
    dashboard: 'https://app.revenuecat.com',
    required: false,
  },
});
