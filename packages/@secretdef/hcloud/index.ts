import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HCLOUD_TOKEN: {
    description: 'Hetzner Cloud API token',
    dashboard: 'https://console.hetzner.cloud',
  },
});
