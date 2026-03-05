import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLERK_SECRET_KEY: {
    description: 'Clerk secret key',
    dashboard: 'https://dashboard.clerk.com/last-active?path=api-keys',
  },
  CLERK_PUBLISHABLE_KEY: {
    description: 'Clerk publishable key',
    dashboard: 'https://dashboard.clerk.com/last-active?path=api-keys',
  },
  CLERK_JWT_KEY: {
    description: 'Clerk JWT verification key',
    dashboard: 'https://dashboard.clerk.com/last-active?path=api-keys',
    required: false,
  },
  CLERK_SIGN_IN_URL: {
    description: 'Sign-in page URL',
    dashboard: 'https://clerk.com/docs/references/environment-variables',
    required: false,
  },
  CLERK_DOMAIN: {
    description: 'Clerk frontend API domain',
    dashboard: 'https://clerk.com/docs/references/environment-variables',
    required: false,
  },
  CLERK_PROXY_URL: {
    description: 'Clerk proxy URL',
    dashboard: 'https://clerk.com/docs/references/environment-variables',
    required: false,
  },
  CLERK_API_URL: {
    description: 'Clerk backend API URL',
    dashboard: 'https://clerk.com/docs/references/environment-variables',
    required: false,
  },
  CLERK_ENCRYPTION_KEY: {
    description: 'Encryption key for Clerk session tokens',
    dashboard: 'https://clerk.com/docs/references/environment-variables',
    required: false,
  },
  CLERK_MACHINE_SECRET_KEY: {
    description: 'Clerk machine-to-machine secret key',
    dashboard: 'https://clerk.com/docs/references/environment-variables',
    required: false,
  },
  CLERK_TELEMETRY_DISABLED: {
    description: 'Disable Clerk telemetry',
    dashboard: 'https://clerk.com/docs/references/environment-variables',
    required: false,
  },
});
