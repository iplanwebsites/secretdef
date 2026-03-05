import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PIRSCH_CLIENT_ID: {
    description: 'Pirsch client ID',
    dashboard: 'https://pirsch.io/settings/developer',
  },
  PIRSCH_CLIENT_SECRET: {
    description: 'Pirsch client secret',
    dashboard: 'https://pirsch.io/settings/developer',
  },
});
