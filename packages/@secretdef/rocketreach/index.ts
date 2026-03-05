import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ROCKETREACH_API_KEY: {
    description: 'RocketReach API key',
    dashboard: 'https://rocketreach.co/api',
  },
});
