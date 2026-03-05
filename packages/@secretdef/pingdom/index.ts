import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PINGDOM_API_TOKEN: {
    description: 'Pingdom API token',
    dashboard: 'https://my.solarwinds.com',
  },
});
