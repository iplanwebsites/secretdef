import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  JIRA_HOST: {
    description: 'Jira instance URL',
    dashboard: 'https://id.atlassian.com/manage-profile/security/api-tokens',
  },
  JIRA_EMAIL: {
    description: 'Jira account email',
    dashboard: 'https://id.atlassian.com/manage-profile/security/api-tokens',
  },
  JIRA_API_TOKEN: {
    description: 'Jira API token',
    dashboard: 'https://id.atlassian.com/manage-profile/security/api-tokens',
  },
});
