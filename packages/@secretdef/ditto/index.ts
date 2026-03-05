import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DITTO_APP_ID: {
    description: 'Ditto app ID',
    dashboard: 'https://portal.ditto.live',
  },
  DITTO_TOKEN: {
    description: 'Ditto auth token',
    dashboard: 'https://portal.ditto.live',
  },
});
