import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  QUICKBASE_USER_TOKEN: {
    description: 'Quickbase user token',
    dashboard: 'https://quickbase.com',
  },
  QUICKBASE_REALM: {
    description: 'Quickbase realm hostname',
    dashboard: 'https://quickbase.com',
  },
});
