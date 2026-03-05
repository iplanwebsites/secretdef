import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZAMMAD_URL: {
    description: 'Zammad instance URL',
    dashboard: 'https://zammad.com',
    validate: 'url',
  },
  ZAMMAD_TOKEN: {
    description: 'Zammad API token',
    dashboard: 'https://zammad.com',
  },
});
