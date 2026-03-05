import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LINGO_API_KEY: {
    description: 'Lingo.dev API key',
    dashboard: 'https://lingo.dev/settings',
  },
});
