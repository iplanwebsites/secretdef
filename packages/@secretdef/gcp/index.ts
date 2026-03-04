import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOOGLE_CLOUD_PROJECT: {
    description: 'GCP project ID — https://console.cloud.google.com/home/dashboard',
  },
  GOOGLE_APPLICATION_CREDENTIALS: {
    description: 'Path to GCP service account JSON — https://console.cloud.google.com/iam-admin/serviceaccounts',
    environments: {
      development: { required: false },
    },
  },
});
