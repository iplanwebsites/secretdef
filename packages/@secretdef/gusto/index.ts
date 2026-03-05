import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GUSTO_CLIENT_ID: {
    description: 'Gusto OAuth client ID',
    dashboard: 'https://dev.gusto.com',
  },
  GUSTO_CLIENT_SECRET: {
    description: 'Gusto OAuth client secret',
    dashboard: 'https://dev.gusto.com',
  },
});
