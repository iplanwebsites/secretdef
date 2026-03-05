import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CENSUS_API_KEY: {
    description: 'US Census API key',
    dashboard: 'https://api.census.gov/data/key_signup.html',
  },
});
