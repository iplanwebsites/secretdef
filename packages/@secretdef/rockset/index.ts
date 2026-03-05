import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ROCKSET_API_KEY: {
    description: 'Rockset API key',
    dashboard: 'https://console.rockset.com',
  },
  ROCKSET_API_SERVER: {
    description: 'Rockset API server URL',
    dashboard: 'https://console.rockset.com',
    validate: 'url',
    required: false,
  },
});
