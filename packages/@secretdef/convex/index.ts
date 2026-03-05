import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NEXT_PUBLIC_CONVEX_URL: {
    description: 'Convex deployment URL for client-side API access',
    dashboard: 'https://dashboard.convex.dev/',
  },
  CONVEX_DEPLOYMENT: {
    description: 'Convex deployment identifier (e.g., "prod:tall-bar")',
    dashboard: 'https://dashboard.convex.dev/',
    required: false,
  },
  CONVEX_SELF_HOSTED_URL: {
    description: 'Convex self-hosted backend URL for self-hosted deployments',
    dashboard: 'https://docs.convex.dev/self-hosted',
    required: false,
  },
  CONVEX_SELF_HOSTED_ADMIN_KEY: {
    description: 'Admin key for Convex self-hosted deployments',
    dashboard: 'https://docs.convex.dev/self-hosted',
    required: false,
  },
});
