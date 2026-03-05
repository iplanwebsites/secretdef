import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZEP_API_KEY: {
    description: 'Zep API key',
    dashboard: 'https://app.getzep.com',
  },
});
