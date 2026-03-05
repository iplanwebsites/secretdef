import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PRISMIC_ACCESS_TOKEN: { description: 'Prismic access token',
    dashboard: 'https://prismic.io/dashboard' },
  PRISMIC_ENDPOINT: { description: 'Prismic repository API endpoint',
    dashboard: 'https://prismic.io/dashboard', required: false },
});
