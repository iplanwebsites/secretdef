import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LIGHTSPEED_API_KEY: {
    description: 'Lightspeed API key',
    dashboard: 'https://www.lightspeedhq.com',
  },
});
