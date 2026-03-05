import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAYPAL_CLIENT_ID: {
    description: 'PayPal REST API client ID',
    dashboard: 'https://developer.paypal.com/dashboard/applications',
  },
  PAYPAL_CLIENT_SECRET: {
    description: 'PayPal REST API client secret',
    dashboard: 'https://developer.paypal.com/dashboard/applications',
  },
  PAYPAL_WEBHOOK_ID: {
    description: 'PayPal webhook ID for event verification',
    dashboard: 'https://developer.paypal.com/dashboard/webhooks',
    required: false,
  },
});
