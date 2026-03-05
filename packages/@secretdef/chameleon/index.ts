import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHAMELEON_API_KEY: {
    description: 'Chameleon API key',
    dashboard: 'https://app.chameleon.io',
  },
  CHAMELEON_SECRET_KEY: {
    description: 'Chameleon secret key',
    dashboard: 'https://app.chameleon.io',
  },
});
