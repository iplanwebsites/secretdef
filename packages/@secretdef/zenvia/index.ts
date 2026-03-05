import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZENVIA_TOKEN: {
    description: 'Zenvia API token',
    dashboard: 'https://app.zenvia.com',
  },
});
