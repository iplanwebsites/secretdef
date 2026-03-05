import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APPFIGURES_CLIENT_KEY: {
    description: 'Appfigures client key',
    dashboard: 'https://appfigures.com',
  },
});
