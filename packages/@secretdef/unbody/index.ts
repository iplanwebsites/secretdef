import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UNBODY_API_KEY: {
    description: 'Unbody API key',
    dashboard: 'https://app.unbody.io',
  },
  UNBODY_PROJECT_ID: {
    description: 'Unbody project ID',
    dashboard: 'https://app.unbody.io',
  },
});
