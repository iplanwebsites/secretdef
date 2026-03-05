import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NIGHTFALL_API_KEY: {
    description: 'Nightfall AI API key',
    dashboard: 'https://app.nightfall.ai',
  },
});
