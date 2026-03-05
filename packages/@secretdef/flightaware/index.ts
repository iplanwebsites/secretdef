import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FLIGHTAWARE_API_KEY: {
    description: 'FlightAware AeroAPI key',
    dashboard: 'https://www.flightaware.com/aeroapi/portal/',
  },
});
