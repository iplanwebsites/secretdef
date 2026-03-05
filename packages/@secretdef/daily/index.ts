import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DAILY_API_KEY: {
    description: 'Daily API key',
    dashboard: 'https://dashboard.daily.co/developers',
  },
});
