import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STREAK_API_KEY: {
    description: 'Streak API key',
    dashboard: 'https://streak.com',
  },
});
