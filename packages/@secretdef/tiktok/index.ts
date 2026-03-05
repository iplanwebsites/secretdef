import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TIKTOK_CLIENT_KEY: {
    description: 'TikTok client key',
    dashboard: 'https://developers.tiktok.com/apps',
  },
  TIKTOK_CLIENT_SECRET: {
    description: 'TikTok client secret',
    dashboard: 'https://developers.tiktok.com/apps',
  },
});
