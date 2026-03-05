import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GIST_API_TOKEN: {
    description: 'Gist API token',
    dashboard: 'https://app.getgist.com',
  },
});
