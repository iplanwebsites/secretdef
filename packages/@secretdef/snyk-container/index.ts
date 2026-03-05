import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SNYK_CONTAINER_TOKEN: {
    description: 'Snyk Container scanning token',
    dashboard: 'https://app.snyk.io/account',
  },
});
