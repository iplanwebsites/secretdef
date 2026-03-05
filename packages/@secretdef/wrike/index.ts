import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WRIKE_PERM_ACCESS_TOKEN: {
    description: 'Wrike permanent access token',
    dashboard: 'https://www.wrike.com/apps/oauth/access',
  },
});
