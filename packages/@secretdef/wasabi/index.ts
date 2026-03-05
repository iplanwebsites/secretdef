import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WASABI_ACCESS_KEY_ID: {
    description: 'Wasabi access key ID',
    dashboard: 'https://console.wasabisys.com',
  },
  WASABI_SECRET_ACCESS_KEY: {
    description: 'Wasabi secret access key',
    dashboard: 'https://console.wasabisys.com',
  },
  WASABI_REGION: {
    description: 'Wasabi region',
    dashboard: 'https://console.wasabisys.com',
    required: false,
  },
});
