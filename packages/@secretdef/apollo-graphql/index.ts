import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APOLLO_KEY: {
    description: 'Apollo Studio API key',
    dashboard: 'https://studio.apollographql.com',
  },
  APOLLO_GRAPH_REF: {
    description: 'Apollo graph reference',
    dashboard: 'https://studio.apollographql.com',
    required: false,
  },
});
