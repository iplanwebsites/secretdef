import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FACEPP_API_KEY: {
    description: 'Face++ API key',
    dashboard: 'https://console.faceplusplus.com',
  },
  FACEPP_API_SECRET: {
    description: 'Face++ API secret',
    dashboard: 'https://console.faceplusplus.com',
  },
});
