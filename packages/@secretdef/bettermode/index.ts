import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BETTERMODE_API_TOKEN: {
    description: 'Bettermode API token',
    dashboard: 'https://app.bettermode.com',
  },
  BETTERMODE_COMMUNITY_URL: {
    description: 'Bettermode community URL',
    dashboard: 'https://app.bettermode.com',
    validate: 'url',
    required: false,
  },
});
