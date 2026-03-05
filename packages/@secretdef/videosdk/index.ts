import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VIDEOSDK_API_KEY: {
    description: 'VideoSDK API key',
    dashboard: 'https://app.videosdk.live/api-keys',
  },
  VIDEOSDK_SECRET_KEY: {
    description: 'VideoSDK secret key',
    dashboard: 'https://app.videosdk.live/api-keys',
  },
});
