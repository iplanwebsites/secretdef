import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ORB_API_KEY: {
    description: 'Orb API key',
    dashboard: 'https://app.withorb.com/settings/api-keys',
  },
});
