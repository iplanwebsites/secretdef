import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AZURE_STORAGE_CONNECTION_STRING: {
    description: 'Azure Blob Storage connection string',
    dashboard: 'https://portal.azure.com',
  },
  AZURE_STORAGE_ACCOUNT_NAME: {
    description: 'Azure storage account name',
    dashboard: 'https://portal.azure.com',
    required: false,
  },
  AZURE_STORAGE_ACCOUNT_KEY: {
    description: 'Azure storage account key',
    dashboard: 'https://portal.azure.com',
    required: false,
  },
});
