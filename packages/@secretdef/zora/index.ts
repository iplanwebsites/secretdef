import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZORA_API_KEY: {
    description: 'Zora NFT API key',
    dashboard: 'https://zora.co',
  },
});
