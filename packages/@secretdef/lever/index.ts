import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LEVER_API_KEY: {
    description: 'Lever API key',
    dashboard: 'https://hire.lever.co/settings/integrations',
  },
});
