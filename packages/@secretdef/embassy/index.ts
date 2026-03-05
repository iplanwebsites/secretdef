import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EMBASSY_API_KEY: {
    description: 'Embassy API key',
    dashboard: 'https://embassy.dev',
  },
});
