import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SUPERSET_SECRET_KEY: {
    description: 'Superset Flask secret key',
    dashboard: 'https://superset.apache.org',
  },
  SUPERSET_URL: {
    description: 'Superset instance URL',
    dashboard: 'https://superset.apache.org',
    validate: 'url',
    required: false,
  },
});
