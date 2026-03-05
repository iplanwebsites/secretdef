import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WORKABLE_ACCESS_TOKEN: {
    description: 'Workable API access token',
    dashboard: 'https://www.workable.com',
  },
  WORKABLE_SUBDOMAIN: {
    description: 'Workable subdomain',
    dashboard: 'https://www.workable.com',
  },
});
