import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SETMORE_API_KEY: {
    description: 'Setmore API key',
    dashboard: 'https://www.setmore.com',
  },
});
