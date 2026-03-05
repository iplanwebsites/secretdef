import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RUNWAYML_API_SECRET: {
    description: 'Runway API secret',
    dashboard: 'https://app.runwayml.com/account',
  },
});
