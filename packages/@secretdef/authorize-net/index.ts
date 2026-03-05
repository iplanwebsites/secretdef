import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AUTHORIZE_NET_API_LOGIN_ID: {
    description: 'Authorize.net API login ID',
    dashboard: 'https://developer.authorize.net',
  },
  AUTHORIZE_NET_TRANSACTION_KEY: {
    description: 'Authorize.net transaction key',
    dashboard: 'https://developer.authorize.net',
  },
});
