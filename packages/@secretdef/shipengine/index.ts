import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHIPENGINE_API_KEY: {
    description: 'ShipEngine API key',
    dashboard: 'https://www.shipengine.com/account/api-management/',
  },
});
