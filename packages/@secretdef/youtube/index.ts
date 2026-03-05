import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  YOUTUBE_API_KEY: {
    description: 'YouTube Data API key',
    dashboard: 'https://console.cloud.google.com/apis/credentials',
  },
});
