import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PIPEDRIVE_API_TOKEN: {
    description: 'Pipedrive API token',
    dashboard: 'https://app.pipedrive.com/settings/api',
  },
});
