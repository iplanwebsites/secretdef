import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MOMENTO_AUTH_TOKEN: {
    description: 'Momento auth token',
    dashboard: 'https://console.gomomento.com',
  },
});
