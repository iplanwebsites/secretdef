import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COMMANDBAR_ORG_ID: {
    description: 'CommandBar organization ID',
    dashboard: 'https://app.commandbar.com',
  },
});
