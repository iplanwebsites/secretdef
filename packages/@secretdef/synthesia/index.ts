import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SYNTHESIA_API_KEY: {
    description: 'Synthesia video API key',
    dashboard: 'https://www.synthesia.io/api',
  },
});
