import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REBRANDLY_API_KEY: {
    description: 'Rebrandly API key',
    dashboard: 'https://app.rebrandly.com',
  },
});
