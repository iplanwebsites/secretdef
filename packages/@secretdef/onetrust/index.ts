import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ONETRUST_TOKEN: {
    description: 'OneTrust API token',
    dashboard: 'https://developer.onetrust.com',
  },
});
