import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SPEECHIFY_API_KEY: {
    description: 'Speechify API key',
    dashboard: 'https://console.speechify.com',
  },
});
