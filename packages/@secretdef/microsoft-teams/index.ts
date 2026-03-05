import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TEAMS_BOT_ID: {
    description: 'Teams bot ID',
    dashboard: 'https://portal.azure.com',
  },
  TEAMS_BOT_PASSWORD: {
    description: 'Teams bot password',
    dashboard: 'https://portal.azure.com',
  },
});
