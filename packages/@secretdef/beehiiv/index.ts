import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BEEHIIV_API_KEY: {
    description: 'beehiiv API key',
    dashboard: 'https://app.beehiiv.com/settings/integrations',
  },
});
