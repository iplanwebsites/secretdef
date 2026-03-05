import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SALEOR_API_URL: {
    description: 'Saleor GraphQL API URL',
    dashboard: 'https://cloud.saleor.io',
    validate: 'url',
  },
  SALEOR_APP_TOKEN: {
    description: 'Saleor app token',
    dashboard: 'https://cloud.saleor.io',
    required: false,
  },
});
