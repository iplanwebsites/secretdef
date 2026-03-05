import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRANSLOADIT_AUTH_KEY: {
    description: 'Transloadit auth key',
    dashboard: 'https://transloadit.com/accounts/credentials',
  },
  TRANSLOADIT_AUTH_SECRET: {
    description: 'Transloadit auth secret',
    dashboard: 'https://transloadit.com/accounts/credentials',
  },
});
