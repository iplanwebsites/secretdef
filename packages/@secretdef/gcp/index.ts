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
  GOOGLE_CLOUD_QUOTA_PROJECT: {
    description: 'GCP quota project for billing — https://cloud.google.com/docs/quota',
    required: false,
  },
  GCLOUD_PROJECT: {
    description: 'GCP project ID (legacy) — https://console.cloud.google.com/home/dashboard',
    required: false,
  },
  CLOUDSDK_CONFIG: {
    description: 'Path to gcloud SDK config directory — https://cloud.google.com/sdk/docs/configurations',
    required: false,
  },
});
