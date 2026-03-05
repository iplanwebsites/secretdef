import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NANGO_SECRET_KEY: {
    description: 'Nango secret key',
    dashboard: 'https://app.nango.dev/environment-settings',
  },
});
