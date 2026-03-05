import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HOOKDECK_API_KEY: { description: 'Hookdeck API key',
    dashboard: 'https://dashboard.hookdeck.com/' },
});
