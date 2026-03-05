import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BASEROW_TOKEN: {
    description: 'Baserow database token',
    dashboard: 'https://baserow.io/user-settings',
  },
  BASEROW_URL: {
    description: 'Baserow instance URL (self-hosted)',
    dashboard: 'https://baserow.io',
    validate: 'url',
    required: false,
  },
});
