import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TISANE_API_KEY: {
    description: 'Tisane API key',
    dashboard: 'https://tisane.ai',
  },
});
