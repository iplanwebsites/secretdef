import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHOPIFY_API_KEY: {
    description: 'Shopify API key',
    dashboard: 'https://partners.shopify.com/org/settings/api-credentials',
  },
  SHOPIFY_API_SECRET: {
    description: 'Shopify API secret',
    dashboard: 'https://partners.shopify.com/org/settings/api-credentials',
  },
  SHOPIFY_APP_URL: {
    description: 'App URL for Shopify',
    dashboard: 'https://partners.shopify.com/',
  },
  SHOPIFY_SCOPES: {
    description: 'Comma-separated list of Shopify OAuth scopes',
    dashboard: 'https://shopify.dev/docs/api/admin-rest/unstable/resources/oauth',
    required: false,
  },
});
