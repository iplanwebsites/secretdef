import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BILLWERK_API_KEY: {
    description: 'Billwerk+ API key',
    dashboard: 'https://www.billwerk.com',
  },
});
