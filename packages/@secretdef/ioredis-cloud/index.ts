import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REDIS_CLOUD_URL: {
    description: 'Redis Cloud connection URL',
    dashboard: 'https://app.redislabs.com',
    validate: 'url',
  },
  REDIS_CLOUD_PASSWORD: {
    description: 'Redis Cloud password',
    dashboard: 'https://app.redislabs.com',
    required: false,
  },
});
