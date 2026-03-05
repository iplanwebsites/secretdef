import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EXA_API_KEY: {
    description: 'Exa search API key',
    dashboard: 'https://dashboard.exa.ai/api-keys',
  },
});
