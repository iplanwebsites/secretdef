import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHIPSTATION_API_KEY: {
    description: 'ShipStation API key',
    dashboard: 'https://ship9.shipstation.com/settings/api',
  },
  SHIPSTATION_API_SECRET: {
    description: 'ShipStation API secret',
    dashboard: 'https://ship9.shipstation.com/settings/api',
  },
});
