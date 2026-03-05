import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APPFOLLOW_API_KEY: {
    description: 'AppFollow API key',
    dashboard: 'https://appfollow.io',
  },
});
