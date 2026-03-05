import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BROWSERLESS_TOKEN: {
    description: 'Browserless API token',
    dashboard: 'https://www.browserless.io/dashboard',
  },
  BROWSERLESS_URL: {
    description: 'Browserless instance URL',
    dashboard: 'https://www.browserless.io',
    validate: 'url',
    required: false,
  },
});
