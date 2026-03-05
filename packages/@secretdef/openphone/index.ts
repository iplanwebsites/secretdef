import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENPHONE_API_KEY: {
    description: 'OpenPhone API key',
    dashboard: 'https://app.openphone.com/settings/api',
  },
});
