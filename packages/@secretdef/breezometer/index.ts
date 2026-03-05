import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BREEZOMETER_API_KEY: {
    description: 'BreezoMeter air quality API key',
    dashboard: 'https://breezometer.com',
  },
});
