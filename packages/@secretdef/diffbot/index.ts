import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DIFFBOT_TOKEN: {
    description: 'Diffbot API token',
    dashboard: 'https://app.diffbot.com',
  },
});
