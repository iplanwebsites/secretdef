import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DESCOPE_PROJECT_ID: {
    description: 'Descope project ID',
    dashboard: 'https://app.descope.com/settings/company/access-tokens',
  },
  DESCOPE_MANAGEMENT_KEY: {
    description: 'Descope management key',
    dashboard: 'https://app.descope.com/settings/company/access-tokens',
    required: false,
  },
});
