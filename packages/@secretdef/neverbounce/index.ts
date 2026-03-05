import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NEVERBOUNCE_API_KEY: {
    description: 'NeverBounce API key',
    dashboard: 'https://app.neverbounce.com/settings/api',
  },
});
