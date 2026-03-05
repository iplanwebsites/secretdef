import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GITHUB_TOKEN: {
    description: 'Personal access token for GitHub API authentication',
    dashboard: 'https://github.com/settings/tokens',
  },
  GITHUB_APP_ID: {
    description: 'GitHub App ID for App authentication',
    dashboard: 'https://github.com/settings/apps',
    required: false,
  },
  GITHUB_APP_PRIVATE_KEY: {
    description: 'GitHub App private key in PEM format',
    dashboard: 'https://github.com/settings/apps',
    required: false,
  },
  GITHUB_WEBHOOK_SECRET: {
    description: 'Webhook secret for request signature verification',
    dashboard: 'https://github.com/settings/apps',
    required: false,
  },
});
