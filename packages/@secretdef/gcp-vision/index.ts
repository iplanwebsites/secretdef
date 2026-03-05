import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOOGLE_VISION_API_KEY: {
    description: 'Google Cloud Vision API key',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
});
