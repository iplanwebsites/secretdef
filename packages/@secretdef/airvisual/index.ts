import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AIRVISUAL_API_KEY: {
    description: 'IQAir AirVisual API key',
    dashboard: 'https://www.iqair.com/air-pollution-data-api',
  },
});
