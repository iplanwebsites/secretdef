import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INTERCOM_ACCESS_TOKEN: {
    description: 'Intercom access token',
    dashboard: 'https://app.intercom.com/a/developer-signup',
  },
  INTERCOM_APP_ID: {
    description: 'Intercom app ID',
    dashboard: 'https://app.intercom.com/a/apps/_/settings/general',
    required: false,
  },
  INTERCOM_CLIENT_SECRET: {
    description: 'Intercom client secret for webhooks',
    dashboard: 'https://app.intercom.com/a/developer-signup',
    required: false,
  },
});
