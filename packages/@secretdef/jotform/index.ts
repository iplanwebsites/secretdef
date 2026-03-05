import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  JOTFORM_API_KEY: {
    description: 'JotForm API key',
    dashboard: 'https://www.jotform.com/myaccount/api',
  },
});
