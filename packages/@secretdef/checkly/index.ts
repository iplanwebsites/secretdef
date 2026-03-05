import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHECKLY_API_KEY: {
    description: 'Checkly API key',
    dashboard: 'https://app.checklyhq.com/settings/account/api-keys',
  },
  CHECKLY_ACCOUNT_ID: {
    description: 'Checkly account ID',
    dashboard: 'https://app.checklyhq.com',
    required: false,
  },
});
