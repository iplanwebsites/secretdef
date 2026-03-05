import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SUMO_LOGIC_ACCESS_ID: {
    description: 'Sumo Logic access ID',
    dashboard: 'https://service.sumologic.com/ui/#/preferences',
  },
  SUMO_LOGIC_ACCESS_KEY: {
    description: 'Sumo Logic access key',
    dashboard: 'https://service.sumologic.com/ui/#/preferences',
  },
});
