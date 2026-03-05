import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DRIFT_API_TOKEN: {
    description: 'Drift API token',
    dashboard: 'https://devdocs.drift.com',
  },
});
