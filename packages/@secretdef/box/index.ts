import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BOX_CLIENT_ID: {
    description: 'Box OAuth client ID',
    dashboard: 'https://app.box.com/developers/console',
  },
  BOX_CLIENT_SECRET: {
    description: 'Box OAuth client secret',
    dashboard: 'https://app.box.com/developers/console',
  },
});
