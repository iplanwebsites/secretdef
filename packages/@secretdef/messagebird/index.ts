import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MESSAGEBIRD_API_KEY: {
    description: 'MessageBird API key',
    dashboard: 'https://dashboard.messagebird.com/en/developers/access',
  },
});
