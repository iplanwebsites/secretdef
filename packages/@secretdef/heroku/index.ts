import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HEROKU_API_KEY: {
    description: 'Heroku API key',
    dashboard: 'https://dashboard.heroku.com/account',
  },
});
