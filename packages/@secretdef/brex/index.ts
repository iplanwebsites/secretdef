import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BREX_TOKEN: {
    description: 'Brex API token',
    dashboard: 'https://dashboard.brex.com/settings/developer',
  },
});
