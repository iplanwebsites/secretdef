import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOOGLE_SHEETS_CLIENT_EMAIL: {
    description: 'Google Sheets service account email',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
  GOOGLE_SHEETS_PRIVATE_KEY: {
    description: 'Google Sheets service account private key',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
});
