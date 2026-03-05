import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CURRENCYLAYER_API_KEY: {
    description: 'Currencylayer API key',
    dashboard: 'https://currencylayer.com/dashboard',
  },
});
