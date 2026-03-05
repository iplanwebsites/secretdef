import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HAWK_API_KEY: {
    description: 'StackHawk API key',
    dashboard: 'https://app.stackhawk.com',
  },
});
