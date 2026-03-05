import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WONDERPUSH_ACCESS_TOKEN: {
    description: 'WonderPush access token',
    dashboard: 'https://dashboard.wonderpush.com',
  },
  WONDERPUSH_APPLICATION_ID: {
    description: 'WonderPush application ID',
    dashboard: 'https://dashboard.wonderpush.com',
    required: false,
  },
});
