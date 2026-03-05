import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CRADLEPOINT_API_KEY: {
    description: 'Cradlepoint NetCloud API key',
    dashboard: 'https://www.cradlepoint.com',
  },
  CRADLEPOINT_API_ID: {
    description: 'Cradlepoint API ID',
    dashboard: 'https://www.cradlepoint.com',
  },
});
