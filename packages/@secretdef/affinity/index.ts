import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AFFINITY_API_KEY: {
    description: 'Affinity API key',
    dashboard: 'https://api-docs.affinity.co',
  },
});
