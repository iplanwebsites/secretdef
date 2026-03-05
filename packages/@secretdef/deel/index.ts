import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DEEL_API_TOKEN: {
    description: 'Deel API token',
    dashboard: 'https://app.deel.com/developer-hub',
  },
});
