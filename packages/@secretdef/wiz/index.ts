import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WIZ_CLIENT_ID: {
    description: 'Wiz client ID',
    dashboard: 'https://app.wiz.io',
  },
  WIZ_CLIENT_SECRET: {
    description: 'Wiz client secret',
    dashboard: 'https://app.wiz.io',
  },
});
