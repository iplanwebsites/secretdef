import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SMARTLOOK_PROJECT_KEY: {
    description: 'Smartlook project key',
    dashboard: 'https://app.smartlook.com',
  },
});
