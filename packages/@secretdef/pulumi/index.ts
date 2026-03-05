import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PULUMI_ACCESS_TOKEN: {
    description: 'Pulumi access token',
    dashboard: 'https://app.pulumi.com/account/tokens',
  },
});
