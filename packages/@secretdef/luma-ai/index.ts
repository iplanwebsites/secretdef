import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LUMAAI_API_KEY: {
    description: 'Luma AI API key',
    dashboard: 'https://lumalabs.ai/dream-machine/api/keys',
  },
});
