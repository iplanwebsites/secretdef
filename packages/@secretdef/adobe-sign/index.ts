import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ADOBE_SIGN_CLIENT_ID: {
    description: 'Adobe Sign OAuth client ID',
    dashboard: 'https://secure.adobesign.com/account/accountSettingsPage',
  },
  ADOBE_SIGN_CLIENT_SECRET: {
    description: 'Adobe Sign OAuth client secret',
    dashboard: 'https://secure.adobesign.com/account/accountSettingsPage',
  },
});
