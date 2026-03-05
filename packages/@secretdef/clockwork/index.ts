import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLOCKWORK_API_KEY: {
    description: 'Clockwork SMS API key',
    dashboard: 'https://www.clockworksms.com',
  },
});
