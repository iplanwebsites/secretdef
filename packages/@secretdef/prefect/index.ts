import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PREFECT_API_KEY: {
    description: 'Prefect Cloud API key',
    dashboard: 'https://app.prefect.cloud',
  },
  PREFECT_API_URL: {
    description: 'Prefect API URL',
    dashboard: 'https://app.prefect.cloud',
    validate: 'url',
    required: false,
  },
});
