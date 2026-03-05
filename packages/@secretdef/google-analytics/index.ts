import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GA_MEASUREMENT_ID: {
    description: 'Google Analytics measurement ID',
    dashboard: 'https://analytics.google.com',
  },
  GA_API_SECRET: {
    description: 'Google Analytics measurement protocol API secret',
    dashboard: 'https://analytics.google.com',
    required: false,
  },
});
