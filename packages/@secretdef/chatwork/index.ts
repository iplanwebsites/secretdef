import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHATWORK_API_TOKEN: {
    description: 'Chatwork API token',
    dashboard: 'https://developer.chatwork.com/reference',
  },
});
