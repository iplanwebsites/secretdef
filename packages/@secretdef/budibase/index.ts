import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BUDIBASE_API_KEY: {
    description: 'Budibase API key',
    dashboard: 'https://budibase.app',
  },
});
