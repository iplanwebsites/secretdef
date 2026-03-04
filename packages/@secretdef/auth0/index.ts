import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AUTH0_DOMAIN: {
    envVar: 'AUTH0_DOMAIN',
    description: 'Auth0 domain — https://manage.auth0.com/dashboard',
  },
  AUTH0_CLIENT_ID: {
    envVar: 'AUTH0_CLIENT_ID',
    description: 'Auth0 client ID — https://manage.auth0.com/dashboard',
  },
  AUTH0_CLIENT_SECRET: {
    envVar: 'AUTH0_CLIENT_SECRET',
    description: 'Auth0 client secret — https://manage.auth0.com/dashboard',
  },
});
