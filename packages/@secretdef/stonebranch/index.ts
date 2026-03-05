import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STONEBRANCH_URL: {
    description: 'Stonebranch Universal Controller URL',
    dashboard: 'https://www.stonebranch.com',
    validate: 'url',
  },
  STONEBRANCH_TOKEN: {
    description: 'Stonebranch API token',
    dashboard: 'https://www.stonebranch.com',
  },
});
