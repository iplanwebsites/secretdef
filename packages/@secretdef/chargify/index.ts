import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHARGIFY_API_KEY: {
    description: 'Chargify API key',
    dashboard: 'https://app.chargify.com',
  },
  CHARGIFY_SUBDOMAIN: {
    description: 'Chargify subdomain',
    dashboard: 'https://app.chargify.com',
    required: false,
  },
});
