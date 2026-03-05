import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FIREBASE_ADMIN_SERVICE_ACCOUNT: {
    description: 'Firebase Admin service account JSON',
    dashboard: 'https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk',
  },
});
