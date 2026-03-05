import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GORSE_API_KEY: {
    description: 'Gorse recommendation API key',
    dashboard: 'https://gorse.io',
  },
  GORSE_URL: {
    description: 'Gorse server URL',
    dashboard: 'https://gorse.io',
    validate: 'url',
    required: false,
  },
});
