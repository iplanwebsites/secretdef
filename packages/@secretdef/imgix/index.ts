import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IMGIX_API_KEY: {
    description: 'imgix management API key',
    dashboard: 'https://dashboard.imgix.com/api-keys',
  },
  IMGIX_DOMAIN: {
    description: 'imgix source domain',
    dashboard: 'https://dashboard.imgix.com',
    required: false,
  },
});
