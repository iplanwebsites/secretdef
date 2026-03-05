import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COUCHBASE_CONNECTION_STRING: {
    description: 'Couchbase connection string',
    dashboard: 'https://cloud.couchbase.com',
  },
  COUCHBASE_USERNAME: {
    description: 'Couchbase username',
    dashboard: 'https://cloud.couchbase.com',
  },
  COUCHBASE_PASSWORD: {
    description: 'Couchbase password',
    dashboard: 'https://cloud.couchbase.com',
  },
  COUCHBASE_BUCKET: {
    description: 'Couchbase bucket name',
    dashboard: 'https://cloud.couchbase.com',
    required: false,
  },
});
