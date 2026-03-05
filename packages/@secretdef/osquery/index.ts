import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FLEET_API_TOKEN: {
    description: 'Fleet (osquery) API token',
    dashboard: 'https://fleetdm.com',
  },
  FLEET_URL: {
    description: 'Fleet server URL',
    dashboard: 'https://fleetdm.com',
    validate: 'url',
    required: false,
  },
});
