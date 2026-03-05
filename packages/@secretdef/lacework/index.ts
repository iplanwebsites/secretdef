import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LACEWORK_API_KEY: {
    description: 'Lacework API key',
    dashboard: 'https://www.lacework.com',
  },
  LACEWORK_API_SECRET: {
    description: 'Lacework API secret',
    dashboard: 'https://www.lacework.com',
  },
  LACEWORK_ACCOUNT: {
    description: 'Lacework account name',
    dashboard: 'https://www.lacework.com',
  },
});
