import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COCKROACHDB_URL: {
    description: 'CockroachDB connection string',
    dashboard: 'https://cockroachlabs.cloud/',
    validate: 'url',
  },
  COCKROACHDB_API_KEY: {
    description: 'CockroachDB Cloud API key',
    dashboard: 'https://cockroachlabs.cloud/access/api',
    required: false,
  },
});
