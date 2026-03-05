import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  CONTENTSTACK_API_KEY: {
    description: 'Contentstack stack API key',
    dashboard: 'https://www.contentstack.com/docs/developers/apis/content-management-api/',
  },
  CONTENTSTACK_DELIVERY_TOKEN: {
    description: 'Contentstack delivery token',
    dashboard: 'https://www.contentstack.com/docs/developers/create-tokens/about-delivery-tokens',
  },
  CONTENTSTACK_MANAGEMENT_TOKEN: {
    description: 'Contentstack management token',
    dashboard: 'https://www.contentstack.com/docs/developers/create-tokens/about-management-tokens',
    required: false,
  },
  CONTENTSTACK_ENVIRONMENT: {
    description: 'Contentstack environment name',
    dashboard: 'https://www.contentstack.com/docs/developers/set-up-environments',
    required: false,
  },
});
