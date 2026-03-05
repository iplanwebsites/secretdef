import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FAL_KEY: { description: 'fal.ai API key',
    dashboard: 'https://fal.ai/dashboard/keys' },
});
