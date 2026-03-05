import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHATFUEL_TOKEN: {
    description: 'Chatfuel API token',
    dashboard: 'https://chatfuel.com',
  },
});
