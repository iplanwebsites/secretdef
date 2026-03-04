import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FIREBASE_API_KEY: {
    description: 'Firebase API key — https://console.firebase.google.com/project/_/settings/general',
  },
  FIREBASE_PROJECT_ID: {
    description: 'Firebase project ID — https://console.firebase.google.com/project/_/settings/general',
  },
  FIREBASE_SERVICE_ACCOUNT_KEY: {
    description: 'Firebase service account JSON key — https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk',
    environments: {
      development: { required: false },
    },
  },
  FIREBASE_AUTH_EMULATOR_HOST: {
    description: 'Firebase Auth emulator host — https://firebase.google.com/docs/emulator-suite',
    required: false,
  },
  FIRESTORE_EMULATOR_HOST: {
    description: 'Firestore emulator host — https://firebase.google.com/docs/emulator-suite',
    required: false,
  },
  FIREBASE_DATABASE_EMULATOR_HOST: {
    description: 'Realtime Database emulator host — https://firebase.google.com/docs/emulator-suite',
    required: false,
  },
  FIREBASE_STORAGE_EMULATOR_HOST: {
    description: 'Cloud Storage emulator host — https://firebase.google.com/docs/emulator-suite',
    required: false,
  },
});
