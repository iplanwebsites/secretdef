import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MAXMIND_ACCOUNT_ID: {
    description: 'MaxMind account ID',
    dashboard: 'https://www.maxmind.com/en/accounts/current/license-key',
  },
  MAXMIND_LICENSE_KEY: {
    description: 'MaxMind license key',
    dashboard: 'https://www.maxmind.com/en/accounts/current/license-key',
  },
});
