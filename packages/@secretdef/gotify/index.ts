import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOTIFY_URL: {
    description: 'Gotify server URL',
    dashboard: 'https://gotify.net',
    validate: 'url',
  },
  GOTIFY_TOKEN: {
    description: 'Gotify application token',
    dashboard: 'https://gotify.net',
  },
});
