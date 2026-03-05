import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PINATA_JWT: {
    description: 'Pinata JWT token',
    dashboard: 'https://app.pinata.cloud/keys',
  },
  PINATA_API_KEY: {
    description: 'Pinata API key',
    dashboard: 'https://app.pinata.cloud/keys',
    required: false,
  },
  PINATA_API_SECRET: {
    description: 'Pinata API secret',
    dashboard: 'https://app.pinata.cloud/keys',
    required: false,
  },
});
