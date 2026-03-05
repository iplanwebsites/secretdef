import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MONDAY_API_KEY: {
    description: 'Monday.com API key',
    dashboard: 'https://monday.com/apps/manage/tokens',
  },
});
