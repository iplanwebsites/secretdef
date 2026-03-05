import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CTP_CLIENT_ID: {
    description: 'Commercetools client ID',
    dashboard: 'https://mc.commercetools.com',
  },
  CTP_CLIENT_SECRET: {
    description: 'Commercetools client secret',
    dashboard: 'https://mc.commercetools.com',
  },
  CTP_PROJECT_KEY: {
    description: 'Commercetools project key',
    dashboard: 'https://mc.commercetools.com',
  },
  CTP_AUTH_URL: {
    description: 'Commercetools auth URL',
    dashboard: 'https://mc.commercetools.com',
    validate: 'url',
    required: false,
  },
  CTP_API_URL: {
    description: 'Commercetools API URL',
    dashboard: 'https://mc.commercetools.com',
    validate: 'url',
    required: false,
  },
});
