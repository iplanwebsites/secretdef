import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CERBOS_HUB_CLIENT_ID: {
    description: 'Cerbos Hub client ID',
    dashboard: 'https://hub.cerbos.dev',
  },
  CERBOS_HUB_CLIENT_SECRET: {
    description: 'Cerbos Hub client secret',
    dashboard: 'https://hub.cerbos.dev',
  },
});
