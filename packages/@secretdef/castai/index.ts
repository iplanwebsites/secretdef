import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CAST_API_KEY: {
    description: 'CAST AI API key',
    dashboard: 'https://console.cast.ai',
  },
});
