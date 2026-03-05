import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  W3W_API_KEY: {
    description: 'what3words API key',
    dashboard: 'https://developer.what3words.com/public-api',
  },
});
