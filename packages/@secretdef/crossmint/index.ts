import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CROSSMINT_API_KEY: {
    description: 'Crossmint API key',
    dashboard: 'https://www.crossmint.com/console/projects',
  },
});
