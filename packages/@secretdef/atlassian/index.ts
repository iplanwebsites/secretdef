import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ATLASSIAN_API_TOKEN: {
    description: 'Atlassian API token',
    dashboard: 'https://id.atlassian.com/manage-profile/security/api-tokens',
  },
  ATLASSIAN_EMAIL: {
    description: 'Atlassian account email',
    dashboard: 'https://id.atlassian.com',
    required: false,
  },
});
