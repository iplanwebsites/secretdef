import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VALTOWN_API_TOKEN: {
    description: 'Val Town API token',
    dashboard: 'https://www.val.town/settings/api',
  },
});
