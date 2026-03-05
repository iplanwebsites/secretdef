import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FRESHBOOKS_CLIENT_ID: {
    description: 'FreshBooks OAuth client ID',
    dashboard: 'https://my.freshbooks.com/#/developer',
  },
  FRESHBOOKS_CLIENT_SECRET: {
    description: 'FreshBooks OAuth client secret',
    dashboard: 'https://my.freshbooks.com/#/developer',
  },
});
