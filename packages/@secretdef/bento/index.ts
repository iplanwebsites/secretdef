import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BENTO_SITE_UUID: {
    description: 'Bento site UUID',
    dashboard: 'https://app.bentonow.com',
  },
  BENTO_SECRET_KEY: {
    description: 'Bento secret key',
    dashboard: 'https://app.bentonow.com',
  },
  BENTO_PUBLISHABLE_KEY: {
    description: 'Bento publishable key',
    dashboard: 'https://app.bentonow.com',
    required: false,
  },
});
