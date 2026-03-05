import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BEEKEEPER_LICENSE_KEY: {
    description: 'Beekeeper Studio license key',
    dashboard: 'https://www.beekeeperstudio.io',
  },
});
