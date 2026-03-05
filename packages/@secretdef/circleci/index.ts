import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CIRCLECI_TOKEN: { description: 'CircleCI personal API token',
    dashboard: 'https://app.circleci.com/settings/user/tokens' },
  CIRCLECI_ORG_ID: { description: 'CircleCI organization ID',
    dashboard: 'https://app.circleci.com/settings/organization/', required: false },
});
