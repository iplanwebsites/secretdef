import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ACRCLOUD_ACCESS_KEY: {
    description: 'ACRCloud access key',
    dashboard: 'https://console.acrcloud.com',
  },
  ACRCLOUD_ACCESS_SECRET: {
    description: 'ACRCloud access secret',
    dashboard: 'https://console.acrcloud.com',
  },
  ACRCLOUD_HOST: {
    description: 'ACRCloud host',
    dashboard: 'https://console.acrcloud.com',
  },
});
