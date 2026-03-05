import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RESY_API_KEY: {
    description: 'Resy API key',
    dashboard: 'https://resy.com',
  },
});
