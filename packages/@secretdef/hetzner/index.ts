import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HETZNER_API_TOKEN: {
    description: 'Hetzner Cloud API token',
    dashboard: 'https://console.hetzner.cloud',
  },
});
