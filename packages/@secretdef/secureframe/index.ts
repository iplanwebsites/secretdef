import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SECUREFRAME_API_KEY: {
    description: 'Secureframe API key',
    dashboard: 'https://app.secureframe.com',
  },
});
