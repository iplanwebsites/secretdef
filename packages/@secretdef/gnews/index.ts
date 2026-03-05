import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GNEWS_API_KEY: {
    description: 'GNews API key',
    dashboard: 'https://gnews.io/dashboard',
  },
});
