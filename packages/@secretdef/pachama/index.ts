import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PACHAMA_API_KEY: {
    description: 'Pachama API key',
    dashboard: 'https://pachama.com',
  },
});
