import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  QUICKNODE_ENDPOINT: {
    description: 'QuickNode endpoint URL',
    dashboard: 'https://dashboard.quicknode.com/endpoints',
    validate: 'url',
  },
});
