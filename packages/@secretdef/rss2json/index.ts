import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RSS2JSON_API_KEY: {
    description: 'RSS2JSON API key',
    dashboard: 'https://rss2json.com',
  },
});
