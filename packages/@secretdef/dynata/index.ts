import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DYNATA_API_KEY: {
    description: 'Dynata API key',
    dashboard: 'https://www.dynata.com',
  },
});
