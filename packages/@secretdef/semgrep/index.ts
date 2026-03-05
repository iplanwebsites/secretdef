import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SEMGREP_APP_TOKEN: {
    description: 'Semgrep app token',
    dashboard: 'https://semgrep.dev/orgs/-/settings/tokens',
  },
});
