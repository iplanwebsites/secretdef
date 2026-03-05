import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENAI_API_KEY: {
    description: 'OpenAI API key',
    dashboard: 'https://platform.openai.com/api-keys',
  },
  OPENAI_ORG_ID: {
    description: 'OpenAI organization ID',
    dashboard: 'https://platform.openai.com/account/organization',
    required: false,
  },
  OPENAI_PROJECT_ID: {
    description: 'OpenAI project ID',
    dashboard: 'https://platform.openai.com/settings',
    required: false,
  },
  OPENAI_BASE_URL: {
    description: 'Override base URL for API requests',
    dashboard: 'https://platform.openai.com/docs',
    required: false,
  },
  OPENAI_API_VERSION: {
    description: 'API version for Azure OpenAI',
    dashboard: 'https://learn.microsoft.com/en-us/azure/ai-services/openai/',
    required: false,
  },
  OPENAI_WEBHOOK_SECRET: {
    description: 'Webhook signing secret',
    dashboard: 'https://platform.openai.com/docs',
    required: false,
  },
});
