import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AZURE_AI_API_KEY: {
    description: 'Azure AI API key',
    dashboard: 'https://ai.azure.com',
  },
  AZURE_AI_ENDPOINT: {
    description: 'Azure AI endpoint URL',
    dashboard: 'https://ai.azure.com',
    validate: 'url',
  },
});
