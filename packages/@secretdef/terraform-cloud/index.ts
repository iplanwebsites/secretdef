import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TFE_TOKEN: {
    description: 'Terraform Cloud API token',
    dashboard: 'https://app.terraform.io/app/settings/tokens',
  },
});
