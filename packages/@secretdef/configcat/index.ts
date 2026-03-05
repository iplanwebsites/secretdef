import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CONFIGCAT_SDK_KEY: {
    description: 'ConfigCat SDK key',
    dashboard: 'https://app.configcat.com/sdkkey',
  },
});
