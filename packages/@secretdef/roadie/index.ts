import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ROADIE_API_TOKEN: {
    description: 'Roadie (Backstage) API token',
    dashboard: 'https://roadie.io',
  },
});
