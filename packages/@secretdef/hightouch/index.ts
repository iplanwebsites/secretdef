import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HIGHTOUCH_API_KEY: {
    description: 'Hightouch API key',
    dashboard: 'https://app.hightouch.com/settings/api-keys',
  },
});
