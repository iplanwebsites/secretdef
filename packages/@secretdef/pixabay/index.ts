import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PIXABAY_API_KEY: {
    description: 'Pixabay API key',
    dashboard: 'https://pixabay.com/api/docs/',
  },
});
