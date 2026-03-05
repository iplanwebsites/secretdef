import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ETHERSCAN_API_KEY: {
    description: 'Etherscan API key',
    dashboard: 'https://etherscan.io/myapikey',
  },
});
