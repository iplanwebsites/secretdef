import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZYWAVE_API_KEY: {
    description: 'Zywave API key',
    dashboard: 'https://www.zywave.com',
  },
});
