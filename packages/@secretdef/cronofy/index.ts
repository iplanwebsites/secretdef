import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CRONOFY_CLIENT_ID: {
    description: 'Cronofy OAuth client ID',
    dashboard: 'https://app.cronofy.com/oauth/applications',
  },
  CRONOFY_CLIENT_SECRET: {
    description: 'Cronofy OAuth client secret',
    dashboard: 'https://app.cronofy.com/oauth/applications',
  },
});
