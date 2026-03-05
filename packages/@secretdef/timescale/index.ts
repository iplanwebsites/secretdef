import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TIMESCALE_SERVICE_URL: {
    description: 'Timescale service URL',
    dashboard: 'https://console.cloud.timescale.com',
    validate: 'url',
  },
});
