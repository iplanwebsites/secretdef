import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REDIS_URL: {
    description: 'Redis connection URL',
    dashboard: 'https://redis.io/docs/getting-started/',
    validate: 'url',
  },
  REDIS_PASSWORD: {
    description: 'Redis authentication password',
    dashboard: 'https://redis.io/docs/management/security/',
    required: false,
  },
  REDIS_HOST: {
    description: 'Redis host',
    dashboard: 'https://redis.io/docs/getting-started/',
    required: false,
  },
});
