import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UNKEY_ROOT_KEY: {
    description: 'Unkey root key',
    dashboard: 'https://app.unkey.com',
  },
});
