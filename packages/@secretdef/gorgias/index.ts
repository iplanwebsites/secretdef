import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GORGIAS_API_KEY: {
    description: 'Gorgias API key',
    dashboard: 'https://gorgias.com',
  },
  GORGIAS_ACCOUNT: {
    description: 'Gorgias account subdomain',
    dashboard: 'https://gorgias.com',
  },
});
