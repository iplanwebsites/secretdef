import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LINODE_TOKEN: {
    description: 'Linode personal access token',
    dashboard: 'https://cloud.linode.com/profile/tokens',
  },
});
