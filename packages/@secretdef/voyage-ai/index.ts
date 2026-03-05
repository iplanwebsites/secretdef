import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VOYAGE_API_KEY: { description: 'Voyage AI API key',
    dashboard: 'https://dash.voyageai.com/api-keys' },
});
