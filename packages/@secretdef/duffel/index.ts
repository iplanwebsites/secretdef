import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DUFFEL_ACCESS_TOKEN: {
    description: 'Duffel API access token',
    dashboard: 'https://app.duffel.com',
  },
});
