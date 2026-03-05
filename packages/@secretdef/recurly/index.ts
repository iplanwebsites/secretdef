import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RECURLY_API_KEY: {
    description: 'Recurly API key',
    dashboard: 'https://app.recurly.com/login',
  },
  RECURLY_SUBDOMAIN: {
    description: 'Recurly subdomain',
    dashboard: 'https://app.recurly.com',
    required: false,
  },
});
