import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COMETCHAT_APP_ID: {
    description: 'CometChat app ID',
    dashboard: 'https://app.cometchat.com',
  },
  COMETCHAT_AUTH_KEY: {
    description: 'CometChat auth key',
    dashboard: 'https://app.cometchat.com',
  },
  COMETCHAT_API_KEY: {
    description: 'CometChat REST API key',
    dashboard: 'https://app.cometchat.com',
    required: false,
  },
});
