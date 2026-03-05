import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SLICKPLAN_API_KEY: {
    description: 'Slickplan API key',
    dashboard: 'https://slickplan.com',
  },
});
