import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CEREBRAS_API_KEY: {
    description: 'Cerebras API key',
    dashboard: 'https://cloud.cerebras.ai/platform/apikeys',
  },
});
