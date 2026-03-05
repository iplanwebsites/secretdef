import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CONTENTHUB_API_KEY: {
    description: 'ContentHub API key',
    dashboard: 'https://contenthub.com',
  },
});
