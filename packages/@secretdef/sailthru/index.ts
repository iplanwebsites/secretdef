import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SAILTHRU_API_KEY: {
    description: 'Sailthru API key',
    dashboard: 'https://my.sailthru.com',
  },
  SAILTHRU_API_SECRET: {
    description: 'Sailthru API secret',
    dashboard: 'https://my.sailthru.com',
  },
});
