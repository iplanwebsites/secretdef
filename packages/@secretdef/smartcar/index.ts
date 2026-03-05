import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SMARTCAR_CLIENT_ID: {
    description: 'Smartcar OAuth client ID',
    dashboard: 'https://dashboard.smartcar.com',
  },
  SMARTCAR_CLIENT_SECRET: {
    description: 'Smartcar OAuth client secret',
    dashboard: 'https://dashboard.smartcar.com',
  },
  SMARTCAR_REDIRECT_URI: {
    description: 'Smartcar OAuth redirect URI',
    dashboard: 'https://dashboard.smartcar.com',
    validate: 'url',
    required: false,
  },
});
