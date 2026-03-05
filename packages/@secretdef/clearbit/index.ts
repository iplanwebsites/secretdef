import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLEARBIT_API_KEY: {
    description: 'Clearbit API key',
    dashboard: 'https://dashboard.clearbit.com/api',
  },
});
