import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IDEOGRAM_API_KEY: {
    description: 'Ideogram API key',
    dashboard: 'https://ideogram.ai/manage-api',
  },
});
