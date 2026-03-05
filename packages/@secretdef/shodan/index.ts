import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHODAN_API_KEY: {
    description: 'Shodan API key',
    dashboard: 'https://account.shodan.io',
  },
});
