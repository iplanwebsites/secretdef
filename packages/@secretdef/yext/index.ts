import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  YEXT_API_KEY: {
    description: 'Yext API key',
    dashboard: 'https://www.yext.com/s/account/accountsettings/apikeys',
  },
});
