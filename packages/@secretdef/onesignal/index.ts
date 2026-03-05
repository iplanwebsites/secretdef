import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ONESIGNAL_APP_ID: { description: 'OneSignal app ID',
    dashboard: 'https://app.onesignal.com/' },
  ONESIGNAL_API_KEY: { description: 'OneSignal REST API key',
    dashboard: 'https://app.onesignal.com/' },
});
