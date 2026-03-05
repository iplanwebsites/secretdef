import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ROLLBAR_ACCESS_TOKEN: { description: 'Rollbar server-side access token',
    dashboard: 'https://rollbar.com/settings/accounts/' },
});
