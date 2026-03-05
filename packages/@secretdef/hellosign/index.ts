import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HELLOSIGN_API_KEY: {
    description: 'Dropbox Sign API key',
    dashboard: 'https://app.hellosign.com/api',
  },
});
