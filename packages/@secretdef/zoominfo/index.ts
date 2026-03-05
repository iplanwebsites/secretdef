import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZOOMINFO_CLIENT_ID: {
    description: 'ZoomInfo client ID',
    dashboard: 'https://api.zoominfo.com',
  },
  ZOOMINFO_PRIVATE_KEY: {
    description: 'ZoomInfo private key',
    dashboard: 'https://api.zoominfo.com',
  },
});
