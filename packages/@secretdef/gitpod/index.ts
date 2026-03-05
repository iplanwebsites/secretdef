import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GITPOD_TOKEN: {
    description: 'Gitpod API token',
    dashboard: 'https://gitpod.io/access-control',
  },
});
