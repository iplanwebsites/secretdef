import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NOVITA_API_KEY: {
    description: 'Novita AI API key',
    dashboard: 'https://novita.ai/settings/key-management',
  },
});
