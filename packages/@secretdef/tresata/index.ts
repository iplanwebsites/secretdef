import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRESATA_API_KEY: {
    description: 'Tresata API key',
    dashboard: 'https://www.tresata.com',
  },
});
