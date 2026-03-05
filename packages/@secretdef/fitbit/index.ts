import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FITBIT_CLIENT_ID: {
    description: 'Fitbit OAuth client ID',
    dashboard: 'https://dev.fitbit.com/apps',
  },
  FITBIT_CLIENT_SECRET: {
    description: 'Fitbit OAuth client secret',
    dashboard: 'https://dev.fitbit.com/apps',
  },
});
