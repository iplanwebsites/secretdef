import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CONSTRUCTORIO_API_KEY: {
    description: 'Constructor.io API key',
    dashboard: 'https://constructor.io/dashboard',
  },
  CONSTRUCTORIO_API_TOKEN: {
    description: 'Constructor.io API token',
    dashboard: 'https://constructor.io/dashboard',
    required: false,
  },
});
