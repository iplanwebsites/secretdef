import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ALGOLIA_APP_ID: {
    description: 'Algolia application ID',
    dashboard: 'https://dashboard.algolia.com/account/api-keys/',
  },
  ALGOLIA_API_KEY: {
    description: 'Algolia API key (search or admin)',
    dashboard: 'https://dashboard.algolia.com/account/api-keys/',
  },
  ALGOLIA_ADMIN_API_KEY: {
    description: 'Algolia admin API key',
    dashboard: 'https://dashboard.algolia.com/account/api-keys/',
    required: false,
  },
  ALGOLIA_SEARCH_API_KEY: {
    description: 'Algolia search-only API key',
    dashboard: 'https://dashboard.algolia.com/account/api-keys/',
    required: false,
  },
});
