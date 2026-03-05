import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AKAMAI_HOST: {
    description: 'Akamai API host',
    dashboard: 'https://techdocs.akamai.com',
  },
  AKAMAI_CLIENT_TOKEN: {
    description: 'Akamai client token',
    dashboard: 'https://techdocs.akamai.com',
  },
  AKAMAI_CLIENT_SECRET: {
    description: 'Akamai client secret',
    dashboard: 'https://techdocs.akamai.com',
  },
  AKAMAI_ACCESS_TOKEN: {
    description: 'Akamai access token',
    dashboard: 'https://techdocs.akamai.com',
  },
});
