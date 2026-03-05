import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FORMBRICKS_API_KEY: {
    description: 'Formbricks API key',
    dashboard: 'https://app.formbricks.com',
  },
  FORMBRICKS_ENVIRONMENT_ID: {
    description: 'Formbricks environment ID',
    dashboard: 'https://app.formbricks.com',
  },
});
