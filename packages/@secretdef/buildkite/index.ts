import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BUILDKITE_API_TOKEN: {
    description: 'Buildkite API access token',
    dashboard: 'https://buildkite.com/user/api-access-tokens',
  },
  BUILDKITE_ORGANIZATION_SLUG: {
    description: 'Buildkite organization slug',
    dashboard: 'https://buildkite.com',
    required: false,
  },
});
