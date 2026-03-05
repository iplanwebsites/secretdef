import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LUCIDCHART_TOKEN: {
    description: 'Lucidchart API token',
    dashboard: 'https://lucid.app',
  },
});
