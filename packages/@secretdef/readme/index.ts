import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  README_API_KEY: {
    description: 'ReadMe API key',
    dashboard: 'https://dash.readme.com',
  },
});
