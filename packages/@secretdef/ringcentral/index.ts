import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RINGCENTRAL_CLIENT_ID: {
    description: 'RingCentral client ID',
    dashboard: 'https://developers.ringcentral.com/console/apps',
  },
  RINGCENTRAL_CLIENT_SECRET: {
    description: 'RingCentral client secret',
    dashboard: 'https://developers.ringcentral.com/console/apps',
  },
  RINGCENTRAL_SERVER_URL: {
    description: 'RingCentral server URL',
    dashboard: 'https://developers.ringcentral.com',
    validate: 'url',
  },
});
