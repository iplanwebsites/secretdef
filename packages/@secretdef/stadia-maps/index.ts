import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STADIA_MAPS_API_KEY: {
    description: 'Stadia Maps API key',
    dashboard: 'https://client.stadiamaps.com',
  },
});
