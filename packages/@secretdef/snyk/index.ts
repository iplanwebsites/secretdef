import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SNYK_TOKEN: { description: 'Snyk API token',
    dashboard: 'https://app.snyk.io/account' },
  SNYK_ORG_ID: { description: 'Snyk organization ID',
    dashboard: 'https://app.snyk.io/org/', required: false },
});
