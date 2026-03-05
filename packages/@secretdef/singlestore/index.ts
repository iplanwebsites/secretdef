import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SINGLESTORE_HOST: {
    description: 'SingleStore host',
    dashboard: 'https://portal.singlestore.com',
  },
  SINGLESTORE_USER: {
    description: 'SingleStore username',
    dashboard: 'https://portal.singlestore.com',
  },
  SINGLESTORE_PASSWORD: {
    description: 'SingleStore password',
    dashboard: 'https://portal.singlestore.com',
  },
  SINGLESTORE_DATABASE: {
    description: 'SingleStore database name',
    dashboard: 'https://portal.singlestore.com',
    required: false,
  },
});
