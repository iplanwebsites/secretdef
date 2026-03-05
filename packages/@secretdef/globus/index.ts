import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GLOBUS_CLIENT_ID: {
    description: 'Globus OAuth client ID',
    dashboard: 'https://app.globus.org/settings/developers',
  },
  GLOBUS_CLIENT_SECRET: {
    description: 'Globus OAuth client secret',
    dashboard: 'https://app.globus.org/settings/developers',
  },
});
