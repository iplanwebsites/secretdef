import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PADDLE_API_KEY: {
    description: 'Paddle API key for authentication',
    dashboard: 'https://vendors.paddle.com/settings/api-keys',
  },
  PADDLE_VENDOR_ID: {
    description: 'Paddle vendor ID',
    dashboard: 'https://vendors.paddle.com/settings',
  },
  PADDLE_WEBHOOK_SECRET: {
    description: 'Webhook signing secret for validating webhook requests',
    dashboard: 'https://vendors.paddle.com/settings/webhooks',
    required: false,
  },
  PADDLE_ENVIRONMENT: {
    description: 'Paddle environment (sandbox or production)',
    dashboard: 'https://vendors.paddle.com/settings',
    required: false,
  },
});
