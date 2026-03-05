import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MINTLIFY_API_KEY: {
    description: 'Mintlify API key',
    dashboard: 'https://mintlify.com/dashboard',
  },
});
