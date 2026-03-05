import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ORDERDESK_STORE_ID: {
    description: 'Order Desk store ID',
    dashboard: 'https://app.orderdesk.me',
  },
  ORDERDESK_API_KEY: {
    description: 'Order Desk API key',
    dashboard: 'https://app.orderdesk.me',
  },
});
