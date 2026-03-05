import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PEXELS_API_KEY: {
    description: 'Pexels API key',
    dashboard: 'https://www.pexels.com/api/new/',
  },
});
