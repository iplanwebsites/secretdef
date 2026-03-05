import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SIMPLEANALYTICS_API_KEY: {
    description: 'Simple Analytics API key',
    dashboard: 'https://simpleanalytics.com/account#api',
  },
});
