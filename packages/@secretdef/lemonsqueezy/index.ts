import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LEMONSQUEEZY_API_KEY: {
    description: 'Lemon Squeezy API key',
    dashboard: 'https://app.lemonsqueezy.com/settings/api',
  },
  LEMONSQUEEZY_WEBHOOK_SECRET: {
    description: 'Webhook signing secret',
    dashboard: 'https://app.lemonsqueezy.com/settings/api',
    required: false,
  },
});
