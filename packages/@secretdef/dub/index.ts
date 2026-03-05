import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DUB_API_KEY: {
    description: 'Dub API key',
    dashboard: 'https://app.dub.co/settings/tokens',
  },
});
