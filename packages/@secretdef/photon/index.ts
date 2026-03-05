import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PHOTON_APP_ID: {
    description: 'Photon application ID',
    dashboard: 'https://dashboard.photonengine.com/apps',
  },
});
