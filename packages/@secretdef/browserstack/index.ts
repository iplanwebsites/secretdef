import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BROWSERSTACK_USERNAME: {
    description: 'BrowserStack username',
    dashboard: 'https://www.browserstack.com/accounts/settings',
  },
  BROWSERSTACK_ACCESS_KEY: {
    description: 'BrowserStack access key',
    dashboard: 'https://www.browserstack.com/accounts/settings',
  },
});
