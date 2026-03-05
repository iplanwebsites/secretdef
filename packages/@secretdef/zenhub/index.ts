import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZENHUB_API_TOKEN: {
    description: 'ZenHub API token',
    dashboard: 'https://app.zenhub.com/settings/tokens',
  },
});
