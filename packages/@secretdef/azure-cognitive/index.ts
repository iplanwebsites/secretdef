import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AZURE_COGNITIVE_ENDPOINT: {
    description: 'Azure Cognitive Services endpoint',
    dashboard: 'https://portal.azure.com',
    validate: 'url',
  },
  AZURE_COGNITIVE_KEY: {
    description: 'Azure Cognitive Services key',
    dashboard: 'https://portal.azure.com',
  },
});
