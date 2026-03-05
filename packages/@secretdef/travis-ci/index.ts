import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRAVIS_CI_TOKEN: {
    description: 'Travis CI API token',
    dashboard: 'https://app.travis-ci.com/account/preferences',
  },
});
