import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  USERPILOT_TOKEN: {
    description: 'Userpilot API token',
    dashboard: 'https://app.userpilot.com',
  },
  USERPILOT_APP_ID: {
    description: 'Userpilot app ID',
    dashboard: 'https://app.userpilot.com',
    required: false,
  },
});
