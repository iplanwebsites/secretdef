import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SAMBANOVA_API_KEY: {
    description: 'SambaNova API key',
    dashboard: 'https://cloud.sambanova.ai/apis',
  },
});
