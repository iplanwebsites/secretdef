import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TINES_API_KEY: {
    description: 'Tines API key',
    dashboard: 'https://www.tines.com',
  },
  TINES_TENANT_URL: {
    description: 'Tines tenant URL',
    dashboard: 'https://www.tines.com',
    validate: 'url',
  },
});
