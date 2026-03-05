import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PUSHER_APP_ID: {
    description: 'Pusher app ID for application identification',
    dashboard: 'https://dashboard.pusher.com/',
  },
  PUSHER_KEY: {
    description: 'Pusher app key for API authentication',
    dashboard: 'https://dashboard.pusher.com/',
  },
  PUSHER_SECRET: {
    description: 'Pusher app secret for signing requests',
    dashboard: 'https://dashboard.pusher.com/',
  },
  PUSHER_CLUSTER: {
    description: 'Pusher cluster assignment for optimal routing',
    dashboard: 'https://dashboard.pusher.com/',
  },
});
