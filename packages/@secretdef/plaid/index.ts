import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLAID_CLIENT_ID: {
    description: 'Plaid API client ID',
    dashboard: 'https://dashboard.plaid.com/developers/keys',
  },
  PLAID_SECRET: {
    description: 'Plaid API secret',
    dashboard: 'https://dashboard.plaid.com/developers/keys',
  },
  PLAID_ENV: {
    description: 'Plaid environment (sandbox, development, or production)',
    dashboard: 'https://dashboard.plaid.com/developers/keys',
    required: false,
  },
});
