import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HEXNODE_API_KEY: {
    description: 'Hexnode MDM API key',
    dashboard: 'https://hexnode.com',
  },
  HEXNODE_PORTAL: {
    description: 'Hexnode portal URL',
    dashboard: 'https://hexnode.com',
  },
});
