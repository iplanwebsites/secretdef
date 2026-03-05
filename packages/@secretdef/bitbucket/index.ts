import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BITBUCKET_USERNAME: {
    description: 'Bitbucket username',
    dashboard: 'https://bitbucket.org/account/settings/',
  },
  BITBUCKET_APP_PASSWORD: {
    description: 'Bitbucket app password',
    dashboard: 'https://bitbucket.org/account/settings/app-passwords/',
  },
  BITBUCKET_WORKSPACE: {
    description: 'Bitbucket workspace slug',
    dashboard: 'https://bitbucket.org/account/workspaces/',
    required: false,
  },
});
