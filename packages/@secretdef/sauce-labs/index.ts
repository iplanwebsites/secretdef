import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SAUCE_USERNAME: {
    description: 'Sauce Labs username',
    dashboard: 'https://accounts.saucelabs.com',
  },
  SAUCE_ACCESS_KEY: {
    description: 'Sauce Labs access key',
    dashboard: 'https://accounts.saucelabs.com',
  },
});
