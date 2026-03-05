import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AZURE_COSMOS_ENDPOINT: {
    description: 'Azure Cosmos DB endpoint',
    dashboard: 'https://portal.azure.com',
    validate: 'url',
  },
  AZURE_COSMOS_KEY: {
    description: 'Azure Cosmos DB key',
    dashboard: 'https://portal.azure.com',
  },
});
