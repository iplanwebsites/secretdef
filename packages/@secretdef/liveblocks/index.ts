import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LIVEBLOCKS_PUBLIC_KEY: {
    description: 'Liveblocks public API key',
    dashboard: 'https://liveblocks.io/dashboard/apikeys',
  },
  LIVEBLOCKS_SECRET_KEY: {
    description: 'Liveblocks secret API key',
    dashboard: 'https://liveblocks.io/dashboard/apikeys',
  },
  LIVEBLOCKS_WEBHOOK_SECRET_KEY: {
    description: 'Liveblocks webhook signing secret',
    dashboard: 'https://liveblocks.io/dashboard/webhooks',
    required: false,
  },
});
