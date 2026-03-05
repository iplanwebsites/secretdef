import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REDDIT_CLIENT_ID: {
    description: 'Reddit OAuth client ID',
    dashboard: 'https://www.reddit.com/prefs/apps',
  },
  REDDIT_CLIENT_SECRET: {
    description: 'Reddit OAuth client secret',
    dashboard: 'https://www.reddit.com/prefs/apps',
  },
});
