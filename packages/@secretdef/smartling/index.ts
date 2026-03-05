import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SMARTLING_USER_ID: {
    description: 'Smartling user identifier',
    dashboard: 'https://dashboard.smartling.com',
  },
  SMARTLING_USER_SECRET: {
    description: 'Smartling user secret',
    dashboard: 'https://dashboard.smartling.com',
  },
});
