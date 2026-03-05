import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CONFLUENCE_HOST: {
    description: 'Confluence instance URL',
    dashboard: 'https://id.atlassian.com/manage-profile/security/api-tokens',
  },
  CONFLUENCE_EMAIL: {
    description: 'Confluence account email',
    dashboard: 'https://id.atlassian.com/manage-profile/security/api-tokens',
  },
  CONFLUENCE_API_TOKEN: {
    description: 'Confluence API token',
    dashboard: 'https://id.atlassian.com/manage-profile/security/api-tokens',
  },
});
