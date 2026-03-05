import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HUME_API_KEY: {
    description: 'Hume AI API key',
    dashboard: 'https://platform.hume.ai/settings/keys',
  },
});
