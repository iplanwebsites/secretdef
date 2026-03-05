import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AZURE_TRANSLATOR_KEY: {
    description: 'Azure Translator API key',
    dashboard: 'https://portal.azure.com',
  },
  AZURE_TRANSLATOR_REGION: {
    description: 'Azure Translator region',
    dashboard: 'https://portal.azure.com',
  },
});
