import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOOGLE_TRANSLATE_API_KEY: {
    description: 'Google Translate API key',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
});
