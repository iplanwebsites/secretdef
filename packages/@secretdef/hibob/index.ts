import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HIBOB_SERVICE_USER_ID: {
    description: 'HiBob service user ID',
    dashboard: 'https://app.hibob.com',
  },
  HIBOB_TOKEN: {
    description: 'HiBob API token',
    dashboard: 'https://app.hibob.com',
  },
});
