import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WOODPECKER_TOKEN: {
    description: 'Woodpecker CI API token',
    dashboard: 'https://woodpecker-ci.org',
  },
  WOODPECKER_SERVER: {
    description: 'Woodpecker CI server URL',
    dashboard: 'https://woodpecker-ci.org',
    validate: 'url',
    required: false,
  },
});
