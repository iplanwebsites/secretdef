import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GITHUB_PACKAGES_TOKEN: {
    description: 'GitHub personal access token for Packages',
    dashboard: 'https://github.com/settings/tokens',
  },
});
