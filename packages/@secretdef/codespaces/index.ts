import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CODESPACES_TOKEN: {
    description: 'Codespaces access token',
    dashboard: 'https://github.com/settings/tokens',
  },
});
