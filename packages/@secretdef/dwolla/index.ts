import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DWOLLA_KEY: {
    description: 'Dwolla API key',
    dashboard: 'https://dashboard.dwolla.com',
  },
  DWOLLA_SECRET: {
    description: 'Dwolla API secret',
    dashboard: 'https://dashboard.dwolla.com',
  },
  DWOLLA_ENVIRONMENT: {
    description: 'Dwolla environment (sandbox/production)',
    dashboard: 'https://dashboard.dwolla.com',
    required: false,
  },
});
