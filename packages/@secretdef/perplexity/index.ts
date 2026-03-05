import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PERPLEXITY_API_KEY: {
    description: 'Perplexity AI API key',
    dashboard: 'https://www.perplexity.ai/settings/api',
  },
});
