import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WEB3STORAGE_TOKEN: {
    description: 'Web3.Storage API token',
    dashboard: 'https://web3.storage/account',
  },
});
