import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APIFY_TOKEN: { description: 'Apify API token',
    dashboard: 'https://console.apify.com/account/integrations' },
});
 