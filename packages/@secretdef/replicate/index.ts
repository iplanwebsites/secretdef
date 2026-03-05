import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REPLICATE_API_TOKEN: {
    description: 'Replicate API token',
    dashboard: 'https://replicate.com/account/api-tokens',
  },
});
