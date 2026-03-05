import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOOGLE_SPEECH_API_KEY: {
    description: 'Google Cloud Speech API key',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
});
