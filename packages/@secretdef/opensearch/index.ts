import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENSEARCH_URL: {
    description: 'OpenSearch URL',
    dashboard: 'https://opensearch.org',
    validate: 'url',
  },
  OPENSEARCH_USERNAME: {
    description: 'OpenSearch username',
    dashboard: 'https://opensearch.org',
    required: false,
  },
  OPENSEARCH_PASSWORD: {
    description: 'OpenSearch password',
    dashboard: 'https://opensearch.org',
    required: false,
  },
});
