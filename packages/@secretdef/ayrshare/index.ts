import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AYRSHARE_API_KEY: {
    description: 'Ayrshare API key',
    dashboard: 'https://app.ayrshare.com/profile',
  },
});
