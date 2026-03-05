import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IMPERVA_API_ID: {
    description: 'Imperva API identifier',
    dashboard: 'https://my.imperva.com',
  },
  IMPERVA_API_KEY: {
    description: 'Imperva API key',
    dashboard: 'https://my.imperva.com',
  },
});
