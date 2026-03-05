import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EE_SERVICE_ACCOUNT_EMAIL: {
    description: 'Earth Engine service account email',
    dashboard: 'https://code.earthengine.google.com',
  },
  EE_PRIVATE_KEY: {
    description: 'Earth Engine service account private key',
    dashboard: 'https://console.cloud.google.com/iam-admin/serviceaccounts',
  },
});
