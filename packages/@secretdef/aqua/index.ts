import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AQUA_KEY: {
    description: 'Aqua Security API key',
    dashboard: 'https://www.aquasec.com',
  },
  AQUA_SECRET: {
    description: 'Aqua Security API secret',
    dashboard: 'https://www.aquasec.com',
  },
});
