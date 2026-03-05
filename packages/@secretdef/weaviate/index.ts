import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WEAVIATE_URL: {
    description: 'Weaviate cluster URL',
    dashboard: 'https://console.weaviate.cloud/',
    validate: 'url',
  },
  WEAVIATE_API_KEY: {
    description: 'Weaviate API key',
    dashboard: 'https://console.weaviate.cloud/',
  },
});
