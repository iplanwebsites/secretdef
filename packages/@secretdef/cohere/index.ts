import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COHERE_API_KEY: {
    description: 'Cohere API key',
    dashboard: 'https://dashboard.cohere.com/api-keys',
  },
});
