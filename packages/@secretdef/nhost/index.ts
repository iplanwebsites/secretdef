import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NHOST_SUBDOMAIN: {
    description: 'Nhost project subdomain',
    dashboard: 'https://app.nhost.io',
  },
  NHOST_REGION: {
    description: 'Nhost project region',
    dashboard: 'https://app.nhost.io',
    required: false,
  },
  NHOST_ADMIN_SECRET: {
    description: 'Nhost admin secret',
    dashboard: 'https://app.nhost.io',
  },
});
