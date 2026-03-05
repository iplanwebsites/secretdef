import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NFT_STORAGE_TOKEN: {
    description: 'NFT.Storage API token',
    dashboard: 'https://nft.storage/manage/',
  },
});
