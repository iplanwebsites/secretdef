import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COSMOS_DB_ENDPOINT: {
    description: 'Cosmos DB endpoint URL',
    dashboard: 'https://portal.azure.com',
    validate: 'url',
  },
  COSMOS_DB_KEY: {
    description: 'Cosmos DB access key',
    dashboard: 'https://portal.azure.com',
  },
  COSMOS_DB_DATABASE_ID: {
    description: 'Cosmos DB database ID',
    dashboard: 'https://portal.azure.com',
    required: false,
  },
});
