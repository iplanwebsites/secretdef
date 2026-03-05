import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TAXJAR_API_KEY: {
    description: 'TaxJar API key',
    dashboard: 'https://app.taxjar.com/account#api-access',
  },
});
