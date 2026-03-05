import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CURATED_API_KEY: {
    description: 'Curated newsletter API key',
    dashboard: 'https://curated.co',
  },
});
