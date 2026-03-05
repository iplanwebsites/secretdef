import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRELLO_API_KEY: {
    description: 'Trello API key',
    dashboard: 'https://trello.com/power-ups/admin',
  },
  TRELLO_TOKEN: {
    description: 'Trello API token',
    dashboard: 'https://trello.com/power-ups/admin',
  },
});
