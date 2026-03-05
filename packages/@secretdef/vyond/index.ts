import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VYOND_API_KEY: {
    description: 'Vyond API key',
    dashboard: 'https://www.vyond.com',
  },
});
