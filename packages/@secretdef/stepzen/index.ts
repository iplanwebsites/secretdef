import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STEPZEN_API_KEY: {
    description: 'StepZen API key',
    dashboard: 'https://dashboard.stepzen.com',
  },
  STEPZEN_ACCOUNT: {
    description: 'StepZen account name',
    dashboard: 'https://dashboard.stepzen.com',
  },
});
