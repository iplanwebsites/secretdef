import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WOLFRAM_APP_ID: {
    description: 'Wolfram Alpha app ID',
    dashboard: 'https://developer.wolframalpha.com/portal/myapps/',
  },
});
