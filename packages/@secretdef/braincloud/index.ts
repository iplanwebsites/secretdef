import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BRAINCLOUD_APP_ID: {
    description: 'brainCloud app ID',
    dashboard: 'https://portal.braincloudservers.com',
  },
  BRAINCLOUD_SECRET: {
    description: 'brainCloud app secret',
    dashboard: 'https://portal.braincloudservers.com',
  },
});
