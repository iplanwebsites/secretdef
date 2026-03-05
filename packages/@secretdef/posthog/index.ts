import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  POSTHOG_API_KEY: {
    description: 'PostHog project API key',
    dashboard: 'https://app.posthog.com/settings/project-api-keys',
  },
  POSTHOG_HOST: {
    description: 'PostHog instance host URL',
    dashboard: 'https://app.posthog.com/settings/project',
    required: false,
  },
  POSTHOG_PERSONAL_API_KEY: {
    description: 'PostHog personal API key for server-side operations',
    dashboard: 'https://app.posthog.com/settings/account-api-keys',
    required: false,
  },
});
