import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STORMGLASS_API_KEY: {
    description: 'Storm Glass weather API key',
    dashboard: 'https://stormglass.io',
  },
});
