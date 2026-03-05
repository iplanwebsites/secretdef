import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GITLAB_TOKEN: {
    description: 'GitLab personal access token',
    dashboard: 'https://gitlab.com/-/user_settings/personal_access_tokens',
  },
  GITLAB_HOST: {
    description: 'GitLab instance URL',
    dashboard: 'https://docs.gitlab.com/ee/api/',
    required: false,
  },
});
