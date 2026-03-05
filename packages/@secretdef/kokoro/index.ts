import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KOKORO_API_KEY: {
    description: 'Kokoro TTS API key',
    dashboard: 'https://kokoro.ai',
  },
});
