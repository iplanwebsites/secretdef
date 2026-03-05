import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BIGQUERY_PROJECT_ID: {
    description: 'Google Cloud project ID for BigQuery',
    dashboard: 'https://console.cloud.google.com/bigquery',
  },
  BIGQUERY_DATASET: {
    description: 'BigQuery default dataset',
    dashboard: 'https://console.cloud.google.com/bigquery',
    required: false,
  },
});
