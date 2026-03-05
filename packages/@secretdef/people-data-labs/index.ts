import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PDL_API_KEY: {
    description: 'People Data Labs API key',
    dashboard: 'https://dashboard.peopledatalabs.com/api-keys',
  },
});
