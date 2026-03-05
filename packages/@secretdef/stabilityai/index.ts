import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STABILITY_API_KEY: { description: 'Stability AI API key',
    dashboard: 'https://platform.stability.ai/account/keys' },
});
