import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HOOKDECK_API_KEY: {
    description: 'Hookdeck API key',
    dashboard: 'https://dashboard.hookdeck.com',
  },
  HOOKDECK_SIGNING_SECRET: {
    description: 'Hookdeck webhook signing secret',
    dashboard: 'https://dashboard.hookdeck.com',
    required: false,
  },
});
