import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MAGIC_SECRET_KEY: {
    description: 'Magic secret key',
    dashboard: 'https://dashboard.magic.link/app/all-apps',
  },
  MAGIC_PUBLISHABLE_KEY: {
    description: 'Magic publishable key',
    dashboard: 'https://dashboard.magic.link/app/all-apps',
    required: false,
  },
});
