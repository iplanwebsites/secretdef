import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REPLIT_TOKEN: {
    description: 'Replit API token',
    dashboard: 'https://replit.com',
  },
});
