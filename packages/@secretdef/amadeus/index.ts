import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AMADEUS_CLIENT_ID: {
    description: 'Amadeus API client ID',
    dashboard: 'https://developers.amadeus.com/my-apps',
  },
  AMADEUS_CLIENT_SECRET: {
    description: 'Amadeus API client secret',
    dashboard: 'https://developers.amadeus.com/my-apps',
  },
  AMADEUS_HOSTNAME: {
    description: 'Amadeus API hostname (test or production)',
    dashboard: 'https://developers.amadeus.com',
    required: false,
  },
});
