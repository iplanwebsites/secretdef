import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HUNTER_API_KEY: {
    description: 'Hunter.io API key',
    dashboard: 'https://hunter.io/api-keys',
  },
});
