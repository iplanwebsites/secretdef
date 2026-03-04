import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLERK_SECRET_KEY: {
    description: 'Clerk secret key — https://dashboard.clerk.com/last-active?path=api-keys',
    environments: {
      development: { envVar: 'CLERK_TEST_SECRET_KEY' },
    },
  },
  CLERK_PUBLISHABLE_KEY: {
    description: 'Clerk publishable key — https://dashboard.clerk.com/last-active?path=api-keys',
    environments: {
      development: { envVar: 'CLERK_TEST_PUBLISHABLE_KEY' },
    },
  },
});
