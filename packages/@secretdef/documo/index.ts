import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DOCUMO_API_KEY: {
    description: 'Documo API key',
    dashboard: 'https://www.documo.com',
  },
});
