import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATABASE_HOST: {
    description: 'PlanetScale database host',
    dashboard: 'https://app.planetscale.com/',
  },
  DATABASE_USERNAME: {
    description: 'PlanetScale database username',
    dashboard: 'https://app.planetscale.com/',
  },
  DATABASE_PASSWORD: {
    description: 'PlanetScale database password',
    dashboard: 'https://app.planetscale.com/',
  },
});
