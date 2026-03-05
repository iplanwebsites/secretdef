import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BAREMETRICS_API_KEY: {
    description: 'Baremetrics API key',
    dashboard: 'https://app.baremetrics.com/settings/api',
  },
});
