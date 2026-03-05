import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CODACY_API_TOKEN: {
    description: 'Codacy API token',
    dashboard: 'https://app.codacy.com/account/apiTokens',
  },
  CODACY_PROJECT_TOKEN: {
    description: 'Codacy project token',
    dashboard: 'https://app.codacy.com',
    required: false,
  },
});
