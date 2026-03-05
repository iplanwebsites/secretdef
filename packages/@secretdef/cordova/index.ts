import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CORDOVA_KEY_STORE_PASSWORD: {
    description: 'Cordova keystore password for Android signing',
    dashboard: 'https://cordova.apache.org/docs',
  },
});
