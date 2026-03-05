import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ARTSY_CLIENT_ID: {
    description: 'Artsy API client ID',
    dashboard: 'https://developers.artsy.net',
  },
  ARTSY_CLIENT_SECRET: {
    description: 'Artsy API client secret',
    dashboard: 'https://developers.artsy.net',
  },
});
