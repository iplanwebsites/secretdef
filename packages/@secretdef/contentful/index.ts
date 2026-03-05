import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  CONTENTFUL_SPACE_ID: {
    description: 'Contentful Space ID',
    dashboard: 'https://app.contentful.com/',
    required: true,
  },
  CONTENTFUL_ACCESS_TOKEN: {
    description: 'Contentful Delivery API token',
    dashboard: 'https://app.contentful.com/',
    required: false,
  },
  CONTENTFUL_DELIVERY_TOKEN: {
    description: 'Contentful Delivery API token (alternative)',
    dashboard: 'https://app.contentful.com/',
    required: false,
  },
  CONTENTFUL_PREVIEW_TOKEN: {
    description: 'Contentful Preview API token',
    dashboard: 'https://app.contentful.com/',
    required: false,
  },
  CONTENTFUL_MANAGEMENT_TOKEN: {
    description: 'Contentful Management API token',
    dashboard: 'https://app.contentful.com/',
    required: false,
  },
});
