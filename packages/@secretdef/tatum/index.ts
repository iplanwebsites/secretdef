import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TATUM_API_KEY: {
    description: 'Tatum API key',
    dashboard: 'https://dashboard.tatum.io',
  },
});
