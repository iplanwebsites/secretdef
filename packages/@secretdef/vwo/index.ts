import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VWO_ACCOUNT_ID: {
    description: 'VWO account ID',
    dashboard: 'https://app.vwo.com',
  },
  VWO_SDK_KEY: {
    description: 'VWO SDK key',
    dashboard: 'https://app.vwo.com',
  },
});
