import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CERTN_API_KEY: {
    description: 'Certn background check API key',
    dashboard: 'https://certn.co',
  },
});
