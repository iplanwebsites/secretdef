import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NOYSI_API_TOKEN: {
    description: 'Noysi API token',
    dashboard: 'https://noysi.com',
  },
});
