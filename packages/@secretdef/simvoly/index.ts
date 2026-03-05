import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SIMVOLY_API_KEY: {
    description: 'Simvoly API key',
    dashboard: 'https://simvoly.com',
  },
});
