import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOOGLE_GEOCODING_API_KEY: {
    description: 'Google Geocoding API key',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
});
