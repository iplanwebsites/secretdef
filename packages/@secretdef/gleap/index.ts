import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GLEAP_API_KEY: {
    description: 'Gleap API key',
    dashboard: 'https://app.gleap.io',
  },
});
