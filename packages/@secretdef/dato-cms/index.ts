import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATOCMS_API_TOKEN: {
    description: 'DatoCMS API token',
    dashboard: 'https://www.datocms.com/dashboard',
  },
});
