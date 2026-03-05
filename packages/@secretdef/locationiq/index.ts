import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOCATIONIQ_API_KEY: {
    description: 'LocationIQ API key',
    dashboard: 'https://my.locationiq.com/dashboard#accesstoken',
  },
});
