import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DINERO_API_KEY: {
    description: 'Dinero API key',
    dashboard: 'https://dinero.dk',
  },
});
