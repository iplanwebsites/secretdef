import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FCM_SERVER_KEY: {
    description: 'FCM server key',
    dashboard: 'https://console.firebase.google.com/project/_/settings/cloudmessaging',
  },
});
