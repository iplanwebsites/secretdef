import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IMAGEAI_API_KEY: {
    description: 'ImageAI API key',
    dashboard: 'https://imageai.io',
  },
});
