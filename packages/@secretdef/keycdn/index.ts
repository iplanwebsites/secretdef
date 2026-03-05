import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KEYCDN_API_KEY: {
    description: 'KeyCDN API key',
    dashboard: 'https://www.keycdn.com/account',
  },
});
