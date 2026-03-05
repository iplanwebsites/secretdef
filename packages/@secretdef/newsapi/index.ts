import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NEWS_API_KEY: {
    description: 'NewsAPI key',
    dashboard: 'https://newsapi.org/account',
  },
});
