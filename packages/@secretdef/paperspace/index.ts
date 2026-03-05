import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAPERSPACE_API_KEY: {
    description: 'Paperspace API key',
    dashboard: 'https://console.paperspace.com',
  },
});
