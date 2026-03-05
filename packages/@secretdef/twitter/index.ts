import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TWITTER_BEARER_TOKEN: { description: 'Twitter/X API bearer token',
    dashboard: 'https://developer.twitter.com/en/portal/dashboard' },
  TWITTER_API_KEY: { description: 'Twitter/X API consumer key',
    dashboard: 'https://developer.twitter.com/en/portal/dashboard', required: false },
  TWITTER_API_SECRET: { description: 'Twitter/X API consumer secret',
    dashboard: 'https://developer.twitter.com/en/portal/dashboard', required: false },
  TWITTER_ACCESS_TOKEN: { description: 'Twitter/X user access token',
    dashboard: 'https://developer.twitter.com/en/portal/dashboard', required: false },
  TWITTER_ACCESS_SECRET: { description: 'Twitter/X user access token secret',
    dashboard: 'https://developer.twitter.com/en/portal/dashboard', required: false },
});
