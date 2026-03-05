import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KAGI_API_KEY: {
    description: 'Kagi search API key',
    dashboard: 'https://kagi.com/settings?p=api',
  },
});
