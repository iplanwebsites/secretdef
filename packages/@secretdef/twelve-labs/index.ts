import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TWELVE_LABS_API_KEY: {
    description: 'Twelve Labs video AI API key',
    dashboard: 'https://api.twelvelabs.io',
  },
});
