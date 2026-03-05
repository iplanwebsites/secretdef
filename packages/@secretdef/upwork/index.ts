import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UPWORK_API_KEY: {
    description: 'Upwork API key',
    dashboard: 'https://www.upwork.com/developer/keys/app',
  },
  UPWORK_API_SECRET: {
    description: 'Upwork API secret',
    dashboard: 'https://www.upwork.com/developer/keys/app',
  },
});
