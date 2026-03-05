import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHARGEBEE_API_KEY: { description: 'Chargebee API key',
    dashboard: 'https://app.chargebee.com/apikeys' },
  CHARGEBEE_SITE: { description: 'Chargebee site name',
    dashboard: 'https://app.chargebee.com/' },
});
