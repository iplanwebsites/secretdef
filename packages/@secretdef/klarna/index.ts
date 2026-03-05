import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KLARNA_USERNAME: {
    description: 'Klarna API username',
    dashboard: 'https://portal.klarna.com',
  },
  KLARNA_PASSWORD: {
    description: 'Klarna API password',
    dashboard: 'https://portal.klarna.com',
  },
  KLARNA_BASE_URL: {
    description: 'Klarna API base URL',
    dashboard: 'https://portal.klarna.com',
    validate: 'url',
    required: false,
  },
});
