import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EVERBRIDGE_USERNAME: {
    description: 'Everbridge API username',
    dashboard: 'https://manager.everbridge.net',
  },
  EVERBRIDGE_PASSWORD: {
    description: 'Everbridge API password',
    dashboard: 'https://manager.everbridge.net',
  },
});
