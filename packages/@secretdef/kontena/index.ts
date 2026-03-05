import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KONTENA_TOKEN: {
    description: 'Kontena authentication token',
    dashboard: 'https://kontena.io',
  },
});
