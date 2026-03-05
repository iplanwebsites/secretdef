import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BROWSERBASE_API_KEY: {
    description: 'Browserbase API key',
    dashboard: 'https://www.browserbase.com/overview',
  },
  BROWSERBASE_PROJECT_ID: {
    description: 'Browserbase project ID',
    dashboard: 'https://www.browserbase.com/overview',
  },
});
