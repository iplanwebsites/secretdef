import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CYPRESS_RECORD_KEY: {
    description: 'Cypress Cloud record key',
    dashboard: 'https://cloud.cypress.io',
  },
});
