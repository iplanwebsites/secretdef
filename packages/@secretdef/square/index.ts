import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SQUARE_ACCESS_TOKEN: {
    description: 'Square API access token',
    dashboard: 'https://developer.squareup.com/apps',
  },
  SQUARE_APPLICATION_ID: {
    description: 'Square application ID',
    dashboard: 'https://developer.squareup.com/apps',
  },
  SQUARE_ENVIRONMENT: {
    description: 'Square environment (Production or Sandbox)',
    dashboard: 'https://developer.squareup.com/apps',
    environments: {
      development: { required: false, default: 'Sandbox' },
    },
  },
});
