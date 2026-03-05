import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SNOV_CLIENT_ID: {
    description: 'Snov.io client ID',
    dashboard: 'https://app.snov.io/account/api',
  },
  SNOV_CLIENT_SECRET: {
    description: 'Snov.io client secret',
    dashboard: 'https://app.snov.io/account/api',
  },
});
