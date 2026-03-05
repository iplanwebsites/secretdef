import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DIGITALOCEAN_ACCESS_TOKEN: {
    description: 'DigitalOcean personal access token',
    dashboard: 'https://cloud.digitalocean.com/account/api/tokens',
  },
});
