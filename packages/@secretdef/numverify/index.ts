import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NUMVERIFY_API_KEY: {
    description: 'numverify API key',
    dashboard: 'https://numverify.com/dashboard',
  },
});
