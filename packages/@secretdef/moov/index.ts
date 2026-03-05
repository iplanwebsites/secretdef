import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MOOV_SECRET_KEY: {
    description: 'Moov secret key',
    dashboard: 'https://dashboard.moov.io',
  },
  MOOV_PUBLIC_KEY: {
    description: 'Moov public key',
    dashboard: 'https://dashboard.moov.io',
    required: false,
  },
});
