import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ASTRO_API_TOKEN: {
    description: 'Astronomer Astro API token',
    dashboard: 'https://cloud.astronomer.io',
  },
});
