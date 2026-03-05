import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ASERTO_TENANT_ID: {
    description: 'Aserto tenant ID',
    dashboard: 'https://console.aserto.com',
  },
  ASERTO_API_KEY: {
    description: 'Aserto API key',
    dashboard: 'https://console.aserto.com',
  },
  ASERTO_AUTHORIZER_SERVICE_URL: {
    description: 'Aserto authorizer URL',
    dashboard: 'https://console.aserto.com',
    validate: 'url',
    required: false,
  },
});
