import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ELASTIC_EMAIL_API_KEY: {
    description: 'Elastic Email API key',
    dashboard: 'https://elasticemail.com/account/apikey',
  },
});
