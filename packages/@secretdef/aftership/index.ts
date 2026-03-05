import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AFTERSHIP_API_KEY: {
    description: 'AfterShip API key',
    dashboard: 'https://admin.aftership.com/settings/api-keys',
  },
});
