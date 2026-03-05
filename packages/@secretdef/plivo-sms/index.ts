import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLIVO_SMS_AUTH_ID: {
    description: 'Plivo SMS auth ID',
    dashboard: 'https://console.plivo.com/dashboard/',
  },
  PLIVO_SMS_AUTH_TOKEN: {
    description: 'Plivo SMS auth token',
    dashboard: 'https://console.plivo.com/dashboard/',
  },
});
