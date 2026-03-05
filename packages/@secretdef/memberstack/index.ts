import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MEMBERSTACK_SECRET_KEY: {
    description: 'Memberstack secret key',
    dashboard: 'https://app.memberstack.com',
  },
});
