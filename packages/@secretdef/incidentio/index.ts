import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INCIDENTIO_API_KEY: {
    description: 'incident.io API key',
    dashboard: 'https://app.incident.io',
  },
});
