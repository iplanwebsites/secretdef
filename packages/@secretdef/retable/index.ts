import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RETABLE_API_KEY: {
    description: 'Retable API key',
    dashboard: 'https://www.retable.io',
  },
});
