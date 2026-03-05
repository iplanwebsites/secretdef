import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZITADEL_DOMAIN: {
    description: 'ZITADEL instance domain',
    dashboard: 'https://zitadel.com',
  },
  ZITADEL_API_KEY: {
    description: 'ZITADEL API key',
    dashboard: 'https://zitadel.com',
    required: false,
  },
  ZITADEL_SERVICE_USER_TOKEN: {
    description: 'ZITADEL service user token',
    dashboard: 'https://zitadel.com',
    required: false,
  },
});
