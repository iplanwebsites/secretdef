import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TAPFILIATE_API_KEY: {
    description: 'Tapfiliate API key',
    dashboard: 'https://tapfiliate.com',
  },
});
