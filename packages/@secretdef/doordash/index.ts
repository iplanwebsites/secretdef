import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DOORDASH_DEVELOPER_ID: {
    description: 'DoorDash developer ID',
    dashboard: 'https://developer.doordash.com',
  },
  DOORDASH_KEY_ID: {
    description: 'DoorDash key ID',
    dashboard: 'https://developer.doordash.com',
  },
  DOORDASH_SIGNING_SECRET: {
    description: 'DoorDash signing secret',
    dashboard: 'https://developer.doordash.com',
  },
});
