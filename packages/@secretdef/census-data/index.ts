import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CENSUS_SECRET_TOKEN: {
    description: 'Census API secret token',
    dashboard: 'https://app.getcensus.com',
  },
});
