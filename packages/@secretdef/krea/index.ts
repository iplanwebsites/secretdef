import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KREA_API_KEY: {
    description: 'Krea image API key',
    dashboard: 'https://www.krea.ai',
  },
});
