import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KLAVIYO_API_KEY: { description: 'Klaviyo API key',
    dashboard: 'https://www.klaviyo.com/settings/account/api-keys' },
  KLAVIYO_PRIVATE_KEY: { required: false, description: 'Klaviyo private key for advanced operations',
    dashboard: 'https://www.klaviyo.com/settings/account/api-keys' },
});
