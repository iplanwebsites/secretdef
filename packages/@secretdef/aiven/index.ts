import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AIVEN_TOKEN: {
    description: 'Aiven API token',
    dashboard: 'https://console.aiven.io/profile/auth',
  },
  AIVEN_PROJECT: {
    description: 'Aiven project name',
    dashboard: 'https://console.aiven.io',
    required: false,
  },
});
