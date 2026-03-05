import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENROUTER_API_KEY: {
    description: 'OpenRouter API key',
    dashboard: 'https://openrouter.ai/keys',
  },
});
