import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MEILI_MASTER_KEY: {
    description: 'Meilisearch master key for admin operations',
    dashboard: 'https://www.meilisearch.com/docs/reference/api/settings',
  },
  MEILI_HOST: {
    description: 'Meilisearch instance URL or host',
    dashboard: 'https://www.meilisearch.com/docs/learn/configuration/instance_options',
    required: false,
  },
});
