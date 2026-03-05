import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MEM0_API_KEY: {
    description: 'Mem0 API key',
    dashboard: 'https://app.mem0.ai/dashboard',
  },
});
