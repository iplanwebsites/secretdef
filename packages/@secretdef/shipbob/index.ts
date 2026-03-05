import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHIPBOB_API_TOKEN: {
    description: 'ShipBob API token',
    dashboard: 'https://developer.shipbob.com',
  },
});
