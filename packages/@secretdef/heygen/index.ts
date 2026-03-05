import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HEYGEN_API_KEY: {
    description: 'HeyGen video API key',
    dashboard: 'https://app.heygen.com/settings',
  },
});
