import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EDGEDB_DSN: {
    description: 'EdgeDB connection DSN',
    dashboard: 'https://www.edgedb.com/cloud',
    validate: 'url',
  },
  EDGEDB_SECRET_KEY: {
    description: 'EdgeDB Cloud secret key',
    dashboard: 'https://www.edgedb.com/cloud',
    required: false,
  },
});
