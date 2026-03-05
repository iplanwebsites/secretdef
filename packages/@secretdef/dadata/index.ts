import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DADATA_API_KEY: {
    description: 'DaData API key',
    dashboard: 'https://dadata.ru',
  },
  DADATA_SECRET_KEY: {
    description: 'DaData secret key',
    dashboard: 'https://dadata.ru',
  },
});
