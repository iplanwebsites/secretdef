import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DEMIO_API_KEY: {
    description: 'Demio webinar API key',
    dashboard: 'https://my.demio.com',
  },
  DEMIO_API_SECRET: {
    description: 'Demio API secret',
    dashboard: 'https://my.demio.com',
  },
});
