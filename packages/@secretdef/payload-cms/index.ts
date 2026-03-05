import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAYLOAD_SECRET: {
    description: 'Payload secret key',
    dashboard: 'https://payloadcms.com',
  },
  PAYLOAD_PUBLIC_SERVER_URL: {
    description: 'Payload public server URL',
    dashboard: 'https://payloadcms.com',
    validate: 'url',
    required: false,
  },
});
