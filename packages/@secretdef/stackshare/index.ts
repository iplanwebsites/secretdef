import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STACKSHARE_API_KEY: {
    description: 'StackShare API key',
    dashboard: 'https://stackshare.io',
  },
});
