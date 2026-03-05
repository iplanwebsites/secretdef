import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PROPELAUTH_AUTH_URL: {
    description: 'PropelAuth auth URL',
    dashboard: 'https://app.propelauth.com',
    validate: 'url',
  },
  PROPELAUTH_API_KEY: {
    description: 'PropelAuth API key',
    dashboard: 'https://app.propelauth.com',
  },
});
