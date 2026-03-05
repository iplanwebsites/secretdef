import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OUTSETA_API_KEY: {
    description: 'Outseta API key',
    dashboard: 'https://outseta.com',
  },
  OUTSETA_API_SECRET: {
    description: 'Outseta API secret',
    dashboard: 'https://outseta.com',
  },
});
