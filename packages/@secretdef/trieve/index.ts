import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRIEVE_API_KEY: {
    description: 'Trieve API key',
    dashboard: 'https://dashboard.trieve.ai',
  },
  TRIEVE_DATASET_ID: {
    description: 'Trieve dataset ID',
    dashboard: 'https://dashboard.trieve.ai',
  },
  TRIEVE_ORG_ID: {
    description: 'Trieve organization ID',
    dashboard: 'https://dashboard.trieve.ai',
    required: false,
  },
});
