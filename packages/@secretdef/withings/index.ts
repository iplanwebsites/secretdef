import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WITHINGS_CLIENT_ID: {
    description: 'Withings OAuth client ID',
    dashboard: 'https://developer.withings.com/dashboard',
  },
  WITHINGS_CLIENT_SECRET: {
    description: 'Withings OAuth client secret',
    dashboard: 'https://developer.withings.com/dashboard',
  },
});
