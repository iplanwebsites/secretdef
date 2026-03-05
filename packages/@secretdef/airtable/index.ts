import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AIRTABLE_API_KEY: {
    description: 'Airtable API key for authentication',
    dashboard: 'https://airtable.com/create/tokens',
  },
  AIRTABLE_ENDPOINT_URL: {
    description: 'Airtable API endpoint URL',
    dashboard: 'https://airtable.com/create/tokens',
    required: false,
  },
});
