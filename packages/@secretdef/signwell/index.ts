import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SIGNWELL_API_KEY: {
    description: 'SignWell API key',
    dashboard: 'https://www.signwell.com/app/account/api',
  },
});
