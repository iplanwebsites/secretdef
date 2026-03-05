import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  XATA_API_KEY: {
    description: 'Xata API key',
    dashboard: 'https://app.xata.io/settings',
  },
  XATA_BRANCH: {
    description: 'Xata branch name',
    dashboard: 'https://app.xata.io',
    required: false,
  },
  XATA_DATABASE_URL: {
    description: 'Xata database URL',
    dashboard: 'https://app.xata.io',
    validate: 'url',
    required: false,
  },
});
