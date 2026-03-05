import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PUBNUB_PUBLISH_KEY: {
    description: 'PubNub publish key',
    dashboard: 'https://admin.pubnub.com',
  },
  PUBNUB_SUBSCRIBE_KEY: {
    description: 'PubNub subscribe key',
    dashboard: 'https://admin.pubnub.com',
  },
  PUBNUB_SECRET_KEY: {
    description: 'PubNub secret key',
    dashboard: 'https://admin.pubnub.com',
    required: false,
  },
});
