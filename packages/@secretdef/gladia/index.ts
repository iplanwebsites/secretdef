import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GLADIA_API_KEY: {
    description: 'Gladia transcription API key',
    dashboard: 'https://app.gladia.io/auth/signin',
  },
});
