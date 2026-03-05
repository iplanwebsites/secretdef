import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MARCHEX_ACCOUNT_ID: {
    description: 'Marchex account ID',
    dashboard: 'https://www.marchex.com',
  },
  MARCHEX_API_KEY: {
    description: 'Marchex API key',
    dashboard: 'https://www.marchex.com',
  },
});
