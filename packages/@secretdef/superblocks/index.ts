import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SUPERBLOCKS_TOKEN: {
    description: 'Superblocks API token',
    dashboard: 'https://app.superblocks.com',
  },
});
