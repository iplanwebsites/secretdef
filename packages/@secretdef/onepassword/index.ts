import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OP_SERVICE_ACCOUNT_TOKEN: {
    description: '1Password service account token',
    dashboard: 'https://my.1password.com/developer-tools/infrastructure-secrets',
  },
  OP_CONNECT_HOST: {
    description: '1Password Connect server URL',
    dashboard: 'https://my.1password.com',
    validate: 'url',
    required: false,
  },
  OP_CONNECT_TOKEN: {
    description: '1Password Connect token',
    dashboard: 'https://my.1password.com',
    required: false,
  },
});
