import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COSMIC_BUCKET_SLUG: {
    description: 'Cosmic bucket slug',
    dashboard: 'https://app.cosmicjs.com',
  },
  COSMIC_READ_KEY: {
    description: 'Cosmic read key',
    dashboard: 'https://app.cosmicjs.com',
  },
  COSMIC_WRITE_KEY: {
    description: 'Cosmic write key',
    dashboard: 'https://app.cosmicjs.com',
    required: false,
  },
});
