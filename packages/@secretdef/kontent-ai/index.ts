import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KONTENT_AI_ENVIRONMENT_ID: {
    description: 'Kontent.ai environment ID',
    dashboard: 'https://app.kontent.ai',
  },
  KONTENT_AI_API_KEY: {
    description: 'Kontent.ai Management API key',
    dashboard: 'https://app.kontent.ai',
    required: false,
  },
});
