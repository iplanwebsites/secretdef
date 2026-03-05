import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SCALR_TOKEN: {
    description: 'Scalr Terraform API token',
    dashboard: 'https://scalr.com',
  },
  SCALR_HOSTNAME: {
    description: 'Scalr hostname',
    dashboard: 'https://scalr.com',
    required: false,
  },
});
