import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AZURE_OPENAI_API_KEY: {
    description: 'Azure OpenAI API key',
    dashboard: 'https://portal.azure.com/',
  },
  AZURE_OPENAI_ENDPOINT: {
    description: 'Azure OpenAI endpoint URL',
    dashboard: 'https://portal.azure.com/',
    validate: 'url',
  },
  AZURE_OPENAI_DEPLOYMENT: {
    description: 'Azure OpenAI deployment name',
    dashboard: 'https://portal.azure.com/',
    required: false,
  },
});
