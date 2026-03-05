import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CODAT_AUTH_HEADER: {
    description: 'Codat authorization header',
    dashboard: 'https://app.codat.io',
  },
});
