import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CARBONE_API_KEY: {
    description: 'Carbone document generation API key',
    dashboard: 'https://account.carbone.io',
  },
});
