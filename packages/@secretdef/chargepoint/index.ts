import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHARGEPOINT_API_KEY: {
    description: 'ChargePoint API key',
    dashboard: 'https://developer.chargepoint.com',
  },
});
