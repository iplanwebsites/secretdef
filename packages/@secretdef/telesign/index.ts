import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TELESIGN_CUSTOMER_ID: {
    description: 'TeleSign customer ID',
    dashboard: 'https://portal.telesign.com',
  },
  TELESIGN_API_KEY: {
    description: 'TeleSign API key',
    dashboard: 'https://portal.telesign.com',
  },
});
