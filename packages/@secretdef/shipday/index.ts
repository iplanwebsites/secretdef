import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHIPDAY_API_KEY: {
    description: 'Shipday API key',
    dashboard: 'https://www.shipday.com',
  },
});
