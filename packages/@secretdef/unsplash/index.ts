import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UNSPLASH_ACCESS_KEY: {
    description: 'Unsplash access key',
    dashboard: 'https://unsplash.com/oauth/applications',
  },
});
