import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLICKSEND_USERNAME: {
    description: 'ClickSend API username',
    dashboard: 'https://dashboard.clicksend.com/account/subaccounts',
  },
  CLICKSEND_API_KEY: {
    description: 'ClickSend API key',
    dashboard: 'https://dashboard.clicksend.com/account/subaccounts',
  },
});
