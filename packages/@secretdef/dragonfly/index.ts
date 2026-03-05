import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DRAGONFLY_URL: {
    description: 'Dragonfly (Redis-compatible) URL',
    dashboard: 'https://www.dragonflydb.io',
    validate: 'url',
  },
  DRAGONFLY_PASSWORD: {
    description: 'Dragonfly password',
    dashboard: 'https://www.dragonflydb.io',
    required: false,
  },
});
