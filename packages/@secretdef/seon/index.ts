import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SEON_LICENSE_KEY: {
    description: 'SEON license key',
    dashboard: 'https://admin.seon.io',
  },
});
