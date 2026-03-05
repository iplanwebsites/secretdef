import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AMAZON_SP_APP_CLIENT_ID: {
    description: 'Amazon SP API client ID',
    dashboard: 'https://sellercentral.amazon.com/apps/develop',
  },
  AMAZON_SP_APP_CLIENT_SECRET: {
    description: 'Amazon SP API client secret',
    dashboard: 'https://sellercentral.amazon.com/apps/develop',
  },
  AMAZON_SP_REFRESH_TOKEN: {
    description: 'Amazon SP API refresh token',
    dashboard: 'https://sellercentral.amazon.com/apps/develop',
  },
});
