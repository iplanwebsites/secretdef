import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AIRTABLE_PAT: {
    description: 'Airtable personal access token',
    dashboard: 'https://airtable.com/create/tokens',
  },
});
