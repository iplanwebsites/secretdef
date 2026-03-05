import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STRAPI_API_TOKEN: {
    description: 'Strapi API token',
    dashboard: 'https://strapi.io',
  },
  STRAPI_URL: {
    description: 'Strapi instance URL',
    dashboard: 'https://strapi.io',
    validate: 'url',
    required: false,
  },
});
