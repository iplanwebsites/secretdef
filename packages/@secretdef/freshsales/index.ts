import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FRESHSALES_API_KEY: {
    description: 'Freshsales API key',
    dashboard: 'https://freshsales.io',
  },
  FRESHSALES_DOMAIN: {
    description: 'Freshsales account domain',
    dashboard: 'https://freshsales.io',
  },
});
