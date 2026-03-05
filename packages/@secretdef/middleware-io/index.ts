import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MIDDLEWARE_API_KEY: {
    description: 'Middleware API key',
    dashboard: 'https://app.middleware.io',
  },
});
