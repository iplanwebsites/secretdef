import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EXCHANGERATE_API_KEY: {
    description: 'ExchangeRate-API key',
    dashboard: 'https://www.exchangerate-api.com/docs/overview',
  },
});
