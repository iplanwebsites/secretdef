import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SKYFLOW_SERVICE_ACCOUNT: {
    description: 'Skyflow service account credentials JSON',
    dashboard: 'https://manage.skyflowapis.com',
  },
  SKYFLOW_VAULT_ID: {
    description: 'Skyflow vault ID',
    dashboard: 'https://manage.skyflowapis.com',
  },
  SKYFLOW_VAULT_URL: {
    description: 'Skyflow vault URL',
    dashboard: 'https://manage.skyflowapis.com',
    validate: 'url',
    required: false,
  },
});
