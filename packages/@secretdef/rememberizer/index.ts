import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REMEMBERIZER_API_KEY: {
    description: 'Rememberizer API key',
    dashboard: 'https://rememberizer.ai',
  },
});
