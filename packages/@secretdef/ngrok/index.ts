import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NGROK_AUTHTOKEN: {
    description: 'ngrok auth token',
    dashboard: 'https://dashboard.ngrok.com/get-started/your-authtoken',
  },
});
