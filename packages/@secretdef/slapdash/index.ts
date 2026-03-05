import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SLAPDASH_API_TOKEN: {
    description: 'Slapdash API token',
    dashboard: 'https://slapdash.com',
  },
});
