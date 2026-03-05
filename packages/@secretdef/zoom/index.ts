import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZOOM_ACCOUNT_ID: {
    description: 'Zoom account ID',
    dashboard: 'https://marketplace.zoom.us/develop/create',
  },
  ZOOM_CLIENT_ID: {
    description: 'Zoom OAuth client ID',
    dashboard: 'https://marketplace.zoom.us/develop/create',
  },
  ZOOM_CLIENT_SECRET: {
    description: 'Zoom OAuth client secret',
    dashboard: 'https://marketplace.zoom.us/develop/create',
  },
});
