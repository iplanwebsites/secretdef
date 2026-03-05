import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  JUMIO_API_TOKEN: {
    description: 'Jumio API token',
    dashboard: 'https://portal.jumio.com',
  },
  JUMIO_API_SECRET: {
    description: 'Jumio API secret',
    dashboard: 'https://portal.jumio.com',
  },
});
