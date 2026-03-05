import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GITEA_TOKEN: {
    description: 'Gitea personal access token',
    dashboard: 'https://gitea.io',
  },
  GITEA_URL: {
    description: 'Gitea instance URL',
    dashboard: 'https://gitea.io',
    validate: 'url',
    required: false,
  },
});
