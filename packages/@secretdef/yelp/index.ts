import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  YELP_API_KEY: {
    description: 'Yelp Fusion API key',
    dashboard: 'https://www.yelp.com/developers/v3/manage_app',
  },
});
