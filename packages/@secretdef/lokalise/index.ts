import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOKALISE_API_TOKEN: {
    description: 'Lokalise API token',
    dashboard: 'https://app.lokalise.com/profile#api-tokens',
  },
  LOKALISE_PROJECT_ID: {
    description: 'Lokalise project ID',
    dashboard: 'https://app.lokalise.com',
    required: false,
  },
});
