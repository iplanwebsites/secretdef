import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SIGHTENGINE_API_USER: {
    description: 'Sightengine API user',
    dashboard: 'https://dashboard.sightengine.com/api-credentials',
  },
  SIGHTENGINE_API_SECRET: {
    description: 'Sightengine API secret',
    dashboard: 'https://dashboard.sightengine.com/api-credentials',
  },
});
