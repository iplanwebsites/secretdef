import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RECRUITEE_API_TOKEN: {
    description: 'Recruitee API token',
    dashboard: 'https://app.recruitee.com',
  },
  RECRUITEE_COMPANY_ID: {
    description: 'Recruitee company ID',
    dashboard: 'https://app.recruitee.com',
  },
});
