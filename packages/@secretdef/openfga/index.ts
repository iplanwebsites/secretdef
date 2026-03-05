import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FGA_API_URL: {
    description: 'OpenFGA API URL',
    dashboard: 'https://openfga.dev',
    validate: 'url',
  },
  FGA_STORE_ID: {
    description: 'OpenFGA store ID',
    dashboard: 'https://openfga.dev',
  },
  FGA_API_TOKEN: {
    description: 'OpenFGA API token',
    dashboard: 'https://openfga.dev',
    required: false,
  },
});
