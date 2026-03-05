import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRIGGER_SECRET_KEY: {
    description: 'Trigger.dev API secret key for authentication',
    dashboard: 'https://cloud.trigger.dev/settings/developer',
  },
  TRIGGER_API_URL: {
    description: 'Trigger.dev API URL (default: https://api.trigger.dev)',
    dashboard: 'https://trigger.dev/docs/management/overview#authentication',
    required: false,
  },
  TRIGGER_ACCESS_TOKEN: {
    description: 'Trigger.dev access token (alternative to TRIGGER_SECRET_KEY)',
    dashboard: 'https://cloud.trigger.dev/settings/developer',
    required: false,
  },
  TRIGGER_STREAM_URL: {
    description: 'Trigger.dev stream URL for run streaming (defaults to TRIGGER_API_URL)',
    dashboard: 'https://trigger.dev/docs',
    required: false,
  },
  TRIGGER_PREVIEW_BRANCH: {
    description: 'Branch name for Trigger.dev preview deployments (defaults to VERCEL_GIT_COMMIT_REF)',
    dashboard: 'https://trigger.dev/docs/deploy',
    required: false,
  },
});
