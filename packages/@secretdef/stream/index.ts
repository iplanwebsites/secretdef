import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STREAM_API_KEY: { description: 'Stream API key',
    dashboard: 'https://dashboard.getstream.io/' },
  STREAM_API_SECRET: { description: 'Stream API secret',
    dashboard: 'https://dashboard.getstream.io/' },
});
