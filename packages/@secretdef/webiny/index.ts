import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WEBINY_API_KEY: {
    description: 'Webiny API key',
    dashboard: 'https://www.webiny.com',
  },
});
