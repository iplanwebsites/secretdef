import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  POCKETBASE_URL: {
    description: 'PocketBase URL',
    dashboard: 'https://pocketbase.io',
    validate: 'url',
  },
  POCKETBASE_ADMIN_EMAIL: {
    description: 'PocketBase admin email',
    dashboard: 'https://pocketbase.io',
    required: false,
  },
  POCKETBASE_ADMIN_PASSWORD: {
    description: 'PocketBase admin password',
    dashboard: 'https://pocketbase.io',
    required: false,
  },
});
