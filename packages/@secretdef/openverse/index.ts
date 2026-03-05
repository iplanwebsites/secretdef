import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENVERSE_CLIENT_ID: {
    description: 'Openverse API client ID',
    dashboard: 'https://api.openverse.org',
  },
  OPENVERSE_CLIENT_SECRET: {
    description: 'Openverse API client secret',
    dashboard: 'https://api.openverse.org',
  },
});
