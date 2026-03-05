import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHECKMARX_BASE_URL: {
    description: 'Checkmarx base URL',
    dashboard: 'https://checkmarx.com',
    validate: 'url',
  },
  CHECKMARX_CLIENT_ID: {
    description: 'Checkmarx client ID',
    dashboard: 'https://checkmarx.com',
  },
  CHECKMARX_CLIENT_SECRET: {
    description: 'Checkmarx client secret',
    dashboard: 'https://checkmarx.com',
  },
});
