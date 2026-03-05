import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NOMIC_API_KEY: {
    description: 'Nomic Atlas API key',
    dashboard: 'https://atlas.nomic.ai',
  },
});
