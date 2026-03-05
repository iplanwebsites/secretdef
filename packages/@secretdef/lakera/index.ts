import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LAKERA_GUARD_API_KEY: {
    description: 'Lakera Guard API key',
    dashboard: 'https://platform.lakera.ai',
  },
});
