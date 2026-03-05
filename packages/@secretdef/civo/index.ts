import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CIVO_TOKEN: {
    description: 'Civo API token',
    dashboard: 'https://dashboard.civo.com/security',
  },
});
