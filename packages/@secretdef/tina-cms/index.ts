import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TINA_CLIENT_ID: {
    description: 'TinaCMS client ID',
    dashboard: 'https://tina.io/docs/tina-cloud/dashboard/overview/',
  },
  TINA_TOKEN: {
    description: 'TinaCMS token',
    dashboard: 'https://tina.io/docs/tina-cloud/dashboard/overview/',
  },
});
