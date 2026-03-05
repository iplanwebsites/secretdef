import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SEATABLE_API_TOKEN: {
    description: 'SeaTable API token',
    dashboard: 'https://cloud.seatable.io',
  },
  SEATABLE_URL: {
    description: 'SeaTable server URL',
    dashboard: 'https://cloud.seatable.io',
    validate: 'url',
    required: false,
  },
});
