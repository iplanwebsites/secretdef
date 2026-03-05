import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CONVERTKIT_API_KEY: {
    description: 'ConvertKit API key',
    dashboard: 'https://app.convertkit.com/account_settings/advanced_settings',
  },
  CONVERTKIT_API_SECRET: {
    description: 'ConvertKit API secret',
    dashboard: 'https://app.convertkit.com/account_settings/advanced_settings',
    required: false,
  },
});
