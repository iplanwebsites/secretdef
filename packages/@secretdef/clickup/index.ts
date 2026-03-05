import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLICKUP_API_KEY: {
    description: 'ClickUp personal API token',
    dashboard: 'https://app.clickup.com/settings/apps',
  },
});
