import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GHOST_API_URL: {
    description: 'Ghost API URL',
    dashboard: 'https://ghost.org',
    validate: 'url',
  },
  GHOST_CONTENT_API_KEY: {
    description: 'Ghost Content API key',
    dashboard: 'https://ghost.org',
  },
  GHOST_ADMIN_API_KEY: {
    description: 'Ghost Admin API key',
    dashboard: 'https://ghost.org',
    required: false,
  },
});
