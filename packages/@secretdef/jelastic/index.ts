import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  JELASTIC_TOKEN: {
    description: 'Jelastic API token',
    dashboard: 'https://jelastic.com',
  },
  JELASTIC_URL: {
    description: 'Jelastic platform URL',
    dashboard: 'https://jelastic.com',
    validate: 'url',
  },
});
