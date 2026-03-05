import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SCREENLY_API_KEY: {
    description: 'Screenly API key',
    dashboard: 'https://login.screenly.io',
  },
});
