import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SURREAL_URL: {
    description: 'SurrealDB URL',
    dashboard: 'https://surrealdb.com/cloud',
    validate: 'url',
  },
  SURREAL_USER: {
    description: 'SurrealDB username',
    dashboard: 'https://surrealdb.com/cloud',
  },
  SURREAL_PASS: {
    description: 'SurrealDB password',
    dashboard: 'https://surrealdb.com/cloud',
  },
  SURREAL_NS: {
    description: 'SurrealDB namespace',
    dashboard: 'https://surrealdb.com/cloud',
    required: false,
  },
  SURREAL_DB: {
    description: 'SurrealDB database',
    dashboard: 'https://surrealdb.com/cloud',
    required: false,
  },
});
