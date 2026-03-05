import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLOUDMERSIVE_API_KEY: {
    description: 'Cloudmersive API key',
    dashboard: 'https://account.cloudmersive.com/keys',
  },
});
