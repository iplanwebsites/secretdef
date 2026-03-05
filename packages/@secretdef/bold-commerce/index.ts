import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BOLD_API_KEY: {
    description: 'Bold Commerce API key',
    dashboard: 'https://developers.boldcommerce.com',
  },
  BOLD_API_TOKEN: {
    description: 'Bold Commerce API token',
    dashboard: 'https://developers.boldcommerce.com',
  },
});
