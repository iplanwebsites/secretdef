import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NOCODB_TOKEN: {
    description: 'NocoDB API token',
    dashboard: 'https://nocodb.com',
  },
  NOCODB_URL: {
    description: 'NocoDB instance URL',
    dashboard: 'https://nocodb.com',
    validate: 'url',
    required: false,
  },
});
