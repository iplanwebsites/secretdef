import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHIPPO_API_KEY: {
    description: 'Shippo API key',
    dashboard: 'https://app.goshippo.com/settings/api',
  },
});
