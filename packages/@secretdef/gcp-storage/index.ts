import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GCS_BUCKET_NAME: {
    description: 'Google Cloud Storage bucket name',
    dashboard: 'https://console.cloud.google.com/storage',
  },
  GCS_PROJECT_ID: {
    description: 'GCP project ID for Cloud Storage',
    dashboard: 'https://console.cloud.google.com/storage',
    required: false,
  },
});
