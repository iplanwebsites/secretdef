import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AZURE_SEARCH_ENDPOINT: {
    description: 'Azure AI Search endpoint',
    dashboard: 'https://portal.azure.com',
    validate: 'url',
  },
  AZURE_SEARCH_KEY: {
    description: 'Azure AI Search admin key',
    dashboard: 'https://portal.azure.com',
  },
});
