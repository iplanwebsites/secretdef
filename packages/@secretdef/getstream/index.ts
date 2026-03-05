import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GETSTREAM_API_KEY: {
    description: 'GetStream API key',
    dashboard: 'https://getstream.io/dashboard',
  },
  GETSTREAM_API_SECRET: {
    description: 'GetStream API secret',
    dashboard: 'https://getstream.io/dashboard',
  },
});
