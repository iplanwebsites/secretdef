import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENLIBRARY_KEY: {
    description: 'Open Library API key',
    dashboard: 'https://openlibrary.org/developers',
  },
});
