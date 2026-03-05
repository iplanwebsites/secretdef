import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KIT_API_SECRET: {
    description: 'Kit (ConvertKit) API secret',
    dashboard: 'https://app.kit.com/account/edit',
  },
});
