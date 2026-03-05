import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GIPHY_API_KEY: {
    description: 'GIPHY API key',
    dashboard: 'https://developers.giphy.com/dashboard/',
  },
});
