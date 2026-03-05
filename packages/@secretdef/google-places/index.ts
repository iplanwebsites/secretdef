import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOOGLE_PLACES_API_KEY: {
    description: 'Google Places API key',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
});
