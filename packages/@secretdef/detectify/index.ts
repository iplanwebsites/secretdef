import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DETECTIFY_API_KEY: {
    description: 'Detectify API key',
    dashboard: 'https://detectify.com',
  },
});
