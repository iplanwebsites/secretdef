import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ALCHEMY_API_KEY: {
    description: 'Alchemy API key',
    dashboard: 'https://dashboard.alchemy.com',
  },
});
