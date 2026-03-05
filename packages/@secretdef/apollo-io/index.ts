import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APOLLO_API_KEY: {
    description: 'Apollo.io API key',
    dashboard: 'https://app.apollo.io/#/settings/integrations/api',
  },
});
