import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATABASE_URL: {
    envVar: 'DATABASE_URL',
    description: 'PlanetScale connection string — https://app.planetscale.com',
  },
});
