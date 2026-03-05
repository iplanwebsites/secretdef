import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOOGLE_DRIVE_CLIENT_ID: {
    description: 'Google Drive OAuth client ID',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
  GOOGLE_DRIVE_CLIENT_SECRET: {
    description: 'Google Drive OAuth client secret',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
});
