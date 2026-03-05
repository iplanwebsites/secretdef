import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ABLY_API_KEY: {
    description: 'Ably API key',
    dashboard: 'https://ably.com/dashboard',
  },
});
