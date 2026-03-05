import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OKTA_DOMAIN: {
    description: 'Okta tenant domain',
    dashboard: 'https://developer.okta.com/docs/api/getting_started/api_credentials',
  },
  OKTA_CLIENT_ID: {
    description: 'Okta OAuth client ID',
    dashboard: 'https://developer.okta.com/docs/api/getting_started/api_credentials',
  },
  OKTA_CLIENT_SECRET: {
    description: 'Okta OAuth client secret',
    dashboard: 'https://developer.okta.com/docs/api/getting_started/api_credentials',
    required: false,
  },
  OKTA_API_TOKEN: {
    description: 'Okta API token',
    dashboard: 'https://developer.okta.com/docs/api/getting_started/api_credentials',
    required: false,
  },
});
