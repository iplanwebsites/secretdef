import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DOCEBO_CLIENT_ID: {
    description: 'Docebo OAuth client ID',
    dashboard: 'https://www.docebo.com',
  },
  DOCEBO_CLIENT_SECRET: {
    description: 'Docebo OAuth client secret',
    dashboard: 'https://www.docebo.com',
  },
  DOCEBO_BASE_URL: {
    description: 'Docebo platform URL',
    dashboard: 'https://www.docebo.com',
    validate: 'url',
  },
});
