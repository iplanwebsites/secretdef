import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPSGENIE_API_KEY: {
    description: 'OpsGenie API key',
    dashboard: 'https://app.opsgenie.com/settings/api-key-management',
  },
});
