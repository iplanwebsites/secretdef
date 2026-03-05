import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GITHUB_COPILOT_TOKEN: {
    description: 'GitHub Copilot token',
    dashboard: 'https://github.com/settings/copilot',
  },
});
