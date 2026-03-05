import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TELNYX_API_KEY: { description: 'Telnyx API key',
    dashboard: 'https://portal.telnyx.com/#/app/api-keys' },
  TELNYX_PUBLIC_KEY: { description: 'Telnyx public key for webhook verification',
    dashboard: 'https://portal.telnyx.com/#/app/api-keys', required: false },
});
