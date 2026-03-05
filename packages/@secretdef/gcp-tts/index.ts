import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOOGLE_TTS_API_KEY: {
    description: 'Google Cloud Text-to-Speech API key',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
});
