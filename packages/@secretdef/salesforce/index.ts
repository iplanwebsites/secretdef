import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SALESFORCE_LOGIN_URL: {
    description: 'Salesforce login URL',
    dashboard: 'https://login.salesforce.com/',
    validate: 'url',
  },
  SALESFORCE_CLIENT_ID: {
    description: 'Salesforce connected app client ID',
    dashboard: 'https://login.salesforce.com/',
  },
  SALESFORCE_CLIENT_SECRET: {
    description: 'Salesforce connected app client secret',
    dashboard: 'https://login.salesforce.com/',
  },
  SALESFORCE_USERNAME: {
    description: 'Salesforce username',
    dashboard: 'https://login.salesforce.com/',
    required: false,
  },
  SALESFORCE_PASSWORD: {
    description: 'Salesforce password',
    dashboard: 'https://login.salesforce.com/',
    required: false,
  },
});
