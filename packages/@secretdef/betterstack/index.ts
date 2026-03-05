import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BETTERSTACK_API_TOKEN: {
    description: 'Better Stack API token',
    dashboard: 'https://betterstack.com/team/settings/api-tokens',
  },
});
