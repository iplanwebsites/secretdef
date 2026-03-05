import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SMARTY_AUTH_ID: {
    description: 'Smarty authentication ID',
    dashboard: 'https://www.smarty.com/account',
  },
  SMARTY_AUTH_TOKEN: {
    description: 'Smarty authentication token',
    dashboard: 'https://www.smarty.com/account',
  },
});
