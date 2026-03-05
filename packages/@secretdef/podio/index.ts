import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PODIO_CLIENT_ID: {
    description: 'Podio OAuth client ID',
    dashboard: 'https://podio.com/settings/api',
  },
  PODIO_CLIENT_SECRET: {
    description: 'Podio OAuth client secret',
    dashboard: 'https://podio.com/settings/api',
  },
});
