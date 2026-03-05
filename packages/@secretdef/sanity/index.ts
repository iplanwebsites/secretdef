import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SANITY_PROJECT_ID: {
    description: 'Sanity project ID',
    dashboard: 'https://www.sanity.io/manage',
    required: true,
  },
  SANITY_DATASET: {
    description: 'Sanity dataset name',
    dashboard: 'https://www.sanity.io/manage',
    required: true,
  },
  SANITY_TOKEN: {
    description: 'Sanity API token (for mutations and authenticated reads)',
    dashboard: 'https://www.sanity.io/manage',
    required: false,
  },
  SANITY_API_VERSION: {
    description: 'Sanity API version (e.g., "2024-12-01")',
    dashboard: 'https://www.sanity.io/docs/api-versioning',
    required: false,
  },
});
