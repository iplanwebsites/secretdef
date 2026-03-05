import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LEANIX_API_TOKEN: {
    description: 'LeanIX API token',
    dashboard: 'https://app.leanix.net',
  },
  LEANIX_SUBDOMAIN: {
    description: 'LeanIX subdomain',
    dashboard: 'https://app.leanix.net',
    required: false,
  },
});
