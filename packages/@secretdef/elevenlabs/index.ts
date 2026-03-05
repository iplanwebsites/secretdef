import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ELEVENLABS_API_KEY: {
    description: 'ElevenLabs API key',
    dashboard: 'https://elevenlabs.io/app/settings/api-keys',
  },
});
