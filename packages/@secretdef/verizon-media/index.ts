import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VERIZON_MEDIA_API_KEY: {
    description: 'Verizon Media API key',
    dashboard: 'https://developer.verizonmedia.com',
  },
});
