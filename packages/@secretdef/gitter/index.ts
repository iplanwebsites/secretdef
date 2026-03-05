import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GITTER_TOKEN: {
    description: 'Gitter API token',
    dashboard: 'https://developer.gitter.im/docs/welcome',
  },
});
