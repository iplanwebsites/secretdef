import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOOGLE_CALENDAR_CLIENT_ID: {
    description: 'Google Calendar OAuth client ID',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
  GOOGLE_CALENDAR_CLIENT_SECRET: {
    description: 'Google Calendar OAuth client secret',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
});
