import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BACKLOG_API_KEY: {
    description: 'Backlog API key',
    dashboard: 'https://backlog.com',
  },
  BACKLOG_SPACE_KEY: {
    description: 'Backlog space key',
    dashboard: 'https://backlog.com',
  },
});
