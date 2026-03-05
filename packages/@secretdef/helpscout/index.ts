import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HELPSCOUT_API_KEY: {
    description: 'Help Scout API key',
    dashboard: 'https://secure.helpscout.net/settings/api',
  },
});
