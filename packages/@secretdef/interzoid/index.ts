import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INTERZOID_API_KEY: {
    description: 'Interzoid API key',
    dashboard: 'https://www.interzoid.com',
  },
});
