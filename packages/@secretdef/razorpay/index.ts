import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RAZORPAY_KEY_ID: {
    description: 'Razorpay API Key ID',
    dashboard: 'https://dashboard.razorpay.com/app/settings/api-keys',
  },
  RAZORPAY_KEY_SECRET: {
    description: 'Razorpay API Key Secret',
    dashboard: 'https://dashboard.razorpay.com/app/settings/api-keys',
  },
  RAZORPAY_WEBHOOK_SECRET: {
    description: 'Razorpay Webhook Secret',
    dashboard: 'https://dashboard.razorpay.com/app/settings/webhooks',
    required: false,
  },
});
