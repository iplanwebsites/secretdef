import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SEISMIC_CLIENT_ID: {
    description: 'Seismic OAuth client ID',
    dashboard: 'https://seismic.com',
  },
  SEISMIC_CLIENT_SECRET: {
    description: 'Seismic OAuth client secret',
    dashboard: 'https://seismic.com',
  },
});
