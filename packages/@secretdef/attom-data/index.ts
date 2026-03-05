import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ATTOM_API_KEY: {
    description: 'ATTOM property data API key',
    dashboard: 'https://api.developer.attomdata.com',
  },
});
