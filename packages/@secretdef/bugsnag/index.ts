import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BUGSNAG_API_KEY: { description: 'Bugsnag API key',
    dashboard: 'https://app.bugsnag.com/settings/' },
});
