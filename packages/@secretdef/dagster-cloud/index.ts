import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DAGSTER_CLOUD_API_TOKEN: {
    description: 'Dagster Cloud API token',
    dashboard: 'https://dagster.cloud',
  },
  DAGSTER_CLOUD_URL: {
    description: 'Dagster Cloud URL',
    dashboard: 'https://dagster.cloud',
    validate: 'url',
    required: false,
  },
});
