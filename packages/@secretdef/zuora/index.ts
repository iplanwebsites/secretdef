import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZUORA_CLIENT_ID: {
    description: 'Zuora OAuth client ID',
    dashboard: 'https://www.zuora.com/developer/api-references/',
  },
  ZUORA_CLIENT_SECRET: {
    description: 'Zuora OAuth client secret',
    dashboard: 'https://www.zuora.com/developer/api-references/',
  },
  ZUORA_BASE_URL: {
    description: 'Zuora API base URL',
    dashboard: 'https://www.zuora.com',
    validate: 'url',
    required: false,
  },
});
