import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FEATUREBASE_API_KEY: {
    description: 'Featurebase API key',
    dashboard: 'https://featurebase.app',
  },
});
