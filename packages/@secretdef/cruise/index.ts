import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CRUISE_API_KEY: {
    description: 'Cruise API key',
    dashboard: 'https://www.getcruise.com',
  },
});
