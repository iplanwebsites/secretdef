import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOOGLE_MAPS_API_KEY: {
    description: 'Google Maps API key',
    dashboard: 'https://console.cloud.google.com/google/maps-apis/credentials',
  },
});
