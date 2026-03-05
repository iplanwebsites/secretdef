import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHATWOOT_API_ACCESS_TOKEN: {
    description: 'Chatwoot API access token',
    dashboard: 'https://chatwoot.com',
  },
  CHATWOOT_BASE_URL: {
    description: 'Chatwoot base URL',
    dashboard: 'https://chatwoot.com',
    validate: 'url',
  },
});
