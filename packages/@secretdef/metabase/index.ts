import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  METABASE_SITE_URL: {
    description: 'Metabase instance URL',
    dashboard: 'https://metabase.com',
    validate: 'url',
  },
  METABASE_API_KEY: {
    description: 'Metabase API key',
    dashboard: 'https://metabase.com',
  },
});
