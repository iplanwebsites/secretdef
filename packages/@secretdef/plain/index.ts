import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLAIN_API_KEY: {
    description: 'Plain API key',
    dashboard: 'https://app.plain.com/workspace/settings/api-keys',
  },
});
