import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VERITABLE_API_KEY: {
    description: 'Veritable API key',
    dashboard: 'https://veritable.ai',
  },
});
