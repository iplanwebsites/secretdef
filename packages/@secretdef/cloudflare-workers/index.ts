import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CF_ACCOUNT_ID: {
    description: 'Cloudflare account ID for Workers',
    dashboard: 'https://dash.cloudflare.com',
  },
  CF_API_TOKEN: {
    description: 'Cloudflare API token for Workers',
    dashboard: 'https://dash.cloudflare.com/profile/api-tokens',
  },
});
