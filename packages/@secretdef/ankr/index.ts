import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ANKR_API_KEY: {
    description: 'Ankr API key',
    dashboard: 'https://www.ankr.com',
  },
});
