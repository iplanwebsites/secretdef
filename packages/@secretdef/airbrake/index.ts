import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AIRBRAKE_PROJECT_ID: {
    description: 'Airbrake project ID',
    dashboard: 'https://app.airbrake.io/projects',
  },
  AIRBRAKE_PROJECT_KEY: {
    description: 'Airbrake project key',
    dashboard: 'https://app.airbrake.io/projects',
  },
});
