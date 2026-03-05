import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EASYPOST_API_KEY: {
    description: 'EasyPost API key',
    dashboard: 'https://www.easypost.com/account/api-keys',
  },
});
