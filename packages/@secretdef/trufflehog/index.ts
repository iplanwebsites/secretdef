import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRUFFLEHOG_API_KEY: {
    description: 'TruffleHog API key',
    dashboard: 'https://trufflesecurity.com',
  },
});
