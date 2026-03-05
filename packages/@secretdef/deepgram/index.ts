import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DEEPGRAM_API_KEY: {
    description: 'Deepgram API key',
    dashboard: 'https://console.deepgram.com/',
  },
});
