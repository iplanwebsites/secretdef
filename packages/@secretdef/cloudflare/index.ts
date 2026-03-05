import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLOUDFLARE_API_TOKEN: {
    description: 'Cloudflare API token for authentication',
    dashboard: 'https://dash.cloudflare.com/profile/api-tokens',
  },
  CLOUDFLARE_API_KEY: {
    description:
      'Legacy Cloudflare Global API Key (not recommended, use API tokens instead)',
    dashboard: 'https://dash.cloudflare.com/profile/api-tokens',
    required: false,
  },
  CLOUDFLARE_EMAIL: {
    description:
      'Email address associated with Cloudflare account, used with Global API Key',
    dashboard: 'https://dash.cloudflare.com/profile/api-tokens',
    required: false,
  },
  CLOUDFLARE_API_USER_SERVICE_KEY: {
    description: 'Cloudflare Origin CA API key for certificate management',
    dashboard: 'https://dash.cloudflare.com/profile/api-tokens',
    required: false,
  },
  CLOUDFLARE_ACCOUNT_ID: {
    description: 'Cloudflare account ID',
    dashboard: 'https://dash.cloudflare.com/profile/api-tokens',
    required: false,
  },
  CLOUDFLARE_BASE_URL: {
    description:
      'Override the default Cloudflare API base URL. Defaults to https://api.cloudflare.com/client/v4',
    dashboard: 'https://dash.cloudflare.com/profile/api-tokens',
    required: false,
  },
});
