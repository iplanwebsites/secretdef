import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DREAMHOST_API_KEY: {
    description: 'DreamHost API key',
    dashboard: 'https://panel.dreamhost.com/index.cgi?tree=home.api',
  },
});
