import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HASURA_GRAPHQL_ADMIN_SECRET: {
    description: 'Hasura admin secret',
    dashboard: 'https://cloud.hasura.io',
  },
  HASURA_GRAPHQL_ENDPOINT: {
    description: 'Hasura GraphQL endpoint',
    dashboard: 'https://cloud.hasura.io',
    validate: 'url',
  },
});
