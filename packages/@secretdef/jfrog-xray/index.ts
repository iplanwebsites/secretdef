import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  JFROG_URL: {
    description: 'JFrog platform URL',
    dashboard: 'https://jfrog.com',
    validate: 'url',
  },
  JFROG_ACCESS_TOKEN: {
    description: 'JFrog access token',
    dashboard: 'https://jfrog.com',
  },
});
