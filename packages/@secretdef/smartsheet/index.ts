import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SMARTSHEET_TOKEN: {
    description: 'Smartsheet API access token',
    dashboard: 'https://app.smartsheet.com/b/home',
  },
});
