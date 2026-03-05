import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DIRECTUS_URL: {
    description: 'Directus instance URL',
    dashboard: 'https://docs.directus.io/',
    validate: 'url',
  },
  DIRECTUS_TOKEN: {
    description: 'Directus static access token',
    dashboard: 'https://docs.directus.io/reference/authentication/',
  },
});
