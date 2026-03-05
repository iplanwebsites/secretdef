import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MATRIX_ACCESS_TOKEN: {
    description: 'Matrix access token',
    dashboard: 'https://element.io',
  },
  MATRIX_HOMESERVER_URL: {
    description: 'Matrix homeserver URL',
    dashboard: 'https://element.io',
    validate: 'url',
  },
});
