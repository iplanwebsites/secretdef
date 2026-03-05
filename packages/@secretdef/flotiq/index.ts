import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FLOTIQ_API_KEY: {
    description: 'Flotiq API key',
    dashboard: 'https://editor.flotiq.com/api-keys.html',
  },
});
