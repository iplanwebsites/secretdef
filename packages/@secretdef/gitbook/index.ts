import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GITBOOK_API_TOKEN: {
    description: 'GitBook API token',
    dashboard: 'https://app.gitbook.com/account/developer',
  },
});
