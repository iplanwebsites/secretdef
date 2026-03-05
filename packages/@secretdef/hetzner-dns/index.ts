import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HETZNER_DNS_TOKEN: {
    description: 'Hetzner DNS API token',
    dashboard: 'https://dns.hetzner.com/settings/api-token',
  },
});
