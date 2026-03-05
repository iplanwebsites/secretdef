import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STRAVA_CLIENT_ID: {
    description: 'Strava API client ID',
    dashboard: 'https://www.strava.com/settings/api',
  },
  STRAVA_CLIENT_SECRET: {
    description: 'Strava API client secret',
    dashboard: 'https://www.strava.com/settings/api',
  },
});
