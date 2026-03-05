import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PROXMOX_API_TOKEN: {
    description: 'Proxmox API token',
    dashboard: 'https://www.proxmox.com',
  },
  PROXMOX_URL: {
    description: 'Proxmox server URL',
    dashboard: 'https://www.proxmox.com',
    validate: 'url',
  },
});
