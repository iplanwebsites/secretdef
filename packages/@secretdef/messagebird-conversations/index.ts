import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MESSAGEBIRD_CONVERSATIONS_KEY: {
    description: 'MessageBird Conversations API key',
    dashboard: 'https://dashboard.messagebird.com',
  },
});
