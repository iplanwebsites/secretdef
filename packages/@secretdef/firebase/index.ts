import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FIREBASE_API_KEY: {
    envVar: 'FIREBASE_API_KEY',
    description: 'Firebase API key — https://console.firebase.google.com/project/_/settings/general',
  },
  FIREBASE_PROJECT_ID: {
    envVar: 'FIREBASE_PROJECT_ID',
    description: 'Firebase project ID — https://console.firebase.google.com/project/_/settings/general',
  },
  FIREBASE_SERVICE_ACCOUNT_KEY: {
    envVar: 'FIREBASE_SERVICE_ACCOUNT_KEY',
    description: 'Firebase service account JSON key — https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk',
    envOverrides: {
      development: { required: false },
    },
  },
});
