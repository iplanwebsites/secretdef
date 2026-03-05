import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STREAM_CHAT_API_KEY: {
    description: 'Stream Chat API key',
    dashboard: 'https://dashboard.getstream.io',
  },
  STREAM_CHAT_API_SECRET: {
    description: 'Stream Chat API secret',
    dashboard: 'https://dashboard.getstream.io',
  },
});
