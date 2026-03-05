import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RAWG_API_KEY: {
    description: 'RAWG video games API key',
    dashboard: 'https://rawg.io/apidocs',
  },
});
