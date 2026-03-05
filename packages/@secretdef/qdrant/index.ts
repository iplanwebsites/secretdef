import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  QDRANT_URL: { description: 'Qdrant cluster URL',
    dashboard: 'https://cloud.qdrant.io/', validate: 'url' },
  QDRANT_API_KEY: { description: 'Qdrant API key',
    dashboard: 'https://cloud.qdrant.io/' },
});
