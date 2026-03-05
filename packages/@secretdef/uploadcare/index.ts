import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UPLOADCARE_PUBLIC_KEY: {
    description: 'Uploadcare public key',
    dashboard: 'https://app.uploadcare.com/projects/-/api-keys/',
  },
  UPLOADCARE_SECRET_KEY: {
    description: 'Uploadcare secret key',
    dashboard: 'https://app.uploadcare.com/projects/-/api-keys/',
  },
});
