import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EXCEPTIONLESS_API_KEY: {
    description: 'Exceptionless API key',
    dashboard: 'https://exceptionless.com',
  },
});
