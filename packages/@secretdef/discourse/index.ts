import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DISCOURSE_API_KEY: {
    description: 'Discourse API key',
    dashboard: 'https://www.discourse.org',
  },
  DISCOURSE_URL: {
    description: 'Discourse forum URL',
    dashboard: 'https://www.discourse.org',
    validate: 'url',
  },
});
