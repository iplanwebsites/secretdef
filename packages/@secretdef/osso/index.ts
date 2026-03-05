import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OSSO_BASE_URL: {
    description: 'Osso base URL',
    dashboard: 'https://ossoapp.com',
    validate: 'url',
  },
  OSSO_CLIENT_ID: {
    description: 'Osso OAuth client ID',
    dashboard: 'https://ossoapp.com',
  },
  OSSO_CLIENT_SECRET: {
    description: 'Osso OAuth client secret',
    dashboard: 'https://ossoapp.com',
  },
});
