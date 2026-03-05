import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAGSEGURO_EMAIL: {
    description: 'PagSeguro account email',
    dashboard: 'https://pagseguro.uol.com.br',
  },
  PAGSEGURO_TOKEN: {
    description: 'PagSeguro API token',
    dashboard: 'https://pagseguro.uol.com.br',
  },
});
