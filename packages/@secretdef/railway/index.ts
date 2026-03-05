import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RAILWAY_TOKEN: { description: 'Railway API token',
    dashboard: 'https://railway.app/account/tokens' },
  RAILWAY_PROJECT_ID: { description: 'Railway project ID',
    dashboard: 'https://railway.app/', required: false },
});
