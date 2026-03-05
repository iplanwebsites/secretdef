import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GATHER_API_KEY: {
    description: 'Gather API key',
    dashboard: 'https://app.gather.town',
  },
  GATHER_SPACE_ID: {
    description: 'Gather space ID',
    dashboard: 'https://app.gather.town',
    required: false,
  },
});
