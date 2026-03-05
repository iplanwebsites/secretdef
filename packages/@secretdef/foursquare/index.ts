import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FOURSQUARE_API_KEY: {
    description: 'Foursquare Places API key',
    dashboard: 'https://foursquare.com/developers/home',
  },
});
