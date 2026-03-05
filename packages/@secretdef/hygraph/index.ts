import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HYGRAPH_ENDPOINT: { description: 'Hygraph content API endpoint',
    dashboard: 'https://app.hygraph.com/', validate: 'url' },
  HYGRAPH_TOKEN: { description: 'Hygraph permanent auth token',
    dashboard: 'https://app.hygraph.com/' },
});
