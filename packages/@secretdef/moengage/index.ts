import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MOENGAGE_APP_ID: {
    description: 'MoEngage app ID',
    dashboard: 'https://dashboard.moengage.com',
  },
  MOENGAGE_API_KEY: {
    description: 'MoEngage API key',
    dashboard: 'https://dashboard.moengage.com',
  },
});
