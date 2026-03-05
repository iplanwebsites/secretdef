import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UPTIMEROBOT_API_KEY: {
    description: 'UptimeRobot API key',
    dashboard: 'https://uptimerobot.com/dashboard',
  },
});
