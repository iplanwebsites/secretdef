import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  POLAR_ACCESS_TOKEN: {
    description: 'Polar access token',
    dashboard: 'https://polar.sh/settings',
  },
});
