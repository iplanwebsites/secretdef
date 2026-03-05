import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STORETASKER_API_KEY: {
    description: 'StoreTasker API key',
    dashboard: 'https://www.storetasker.com',
  },
});
