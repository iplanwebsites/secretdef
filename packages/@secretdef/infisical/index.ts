import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INFISICAL_CLIENT_ID: { description: 'Infisical machine identity client ID',
    dashboard: 'https://app.infisical.com/' },
  INFISICAL_CLIENT_SECRET: { description: 'Infisical machine identity client secret',
    dashboard: 'https://app.infisical.com/' },
  INFISICAL_TOKEN: { description: 'Infisical service token (legacy)',
    dashboard: 'https://app.infisical.com/', required: false },
});
