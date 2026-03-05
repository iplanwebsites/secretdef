import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AUTH0_DOMAIN: {
    description: 'Auth0 tenant domain',
    dashboard: 'https://manage.auth0.com/',
  },
  AUTH0_CLIENT_ID: {
    description: 'Auth0 application client ID',
    dashboard: 'https://manage.auth0.com/',
  },
  AUTH0_CLIENT_SECRET: {
    description: 'Auth0 application client secret',
    dashboard: 'https://manage.auth0.com/',
  },
  AUTH0_AUDIENCE: {
    description: 'Auth0 API audience identifier',
    dashboard: 'https://manage.auth0.com/',
    required: false,
  },
});
