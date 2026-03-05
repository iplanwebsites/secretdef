import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GRIDSOME_API_KEY: {
    description: 'Gridsome API key',
    dashboard: 'https://gridsome.org',
  },
});
